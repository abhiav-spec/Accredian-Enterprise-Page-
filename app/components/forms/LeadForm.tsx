"use client";

import { useState } from 'react';
import type { LeadFormData } from '@/types';

export function LeadForm() {
  const [status, setStatus] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const payload: LeadFormData = {
      name: String(formData.get('name') || ''),
      email: String(formData.get('email') || ''),
      phone: String(formData.get('phone') || ''),
      company: String(formData.get('company') || ''),
      message: String(formData.get('message') || ''),
    };

    const response = await fetch('/api/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      setStatus('Lead submitted successfully.');
      e.currentTarget.reset();
      return;
    }

    setStatus('Failed to submit lead.');
  };

  return (
    <form className="grid grid-cols-1 gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
      <input className="rounded-lg border border-outline-variant px-4 py-3" name="name" placeholder="Name" required type="text" />
      <input className="rounded-lg border border-outline-variant px-4 py-3" name="email" placeholder="Email" required type="email" />
      <input className="rounded-lg border border-outline-variant px-4 py-3" name="phone" placeholder="Phone" required type="tel" />
      <input className="rounded-lg border border-outline-variant px-4 py-3" name="company" placeholder="Company" type="text" />
      <textarea className="md:col-span-2 rounded-lg border border-outline-variant px-4 py-3" name="message" placeholder="Message" rows={4} />
      <div className="md:col-span-2 flex items-center justify-between gap-3">
        <button className="group relative rounded-lg bg-gradient-to-r from-primary to-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:shadow-2xl hover:shadow-primary/50 hover:scale-105 active:scale-95 overflow-hidden" type="submit">
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 group-hover:animate-pulse transition-opacity duration-300" />
          <span className="relative">Submit</span>
        </button>
        {status ? <p className="text-sm text-on-surface-variant">{status}</p> : null}
      </div>
    </form>
  );
}
