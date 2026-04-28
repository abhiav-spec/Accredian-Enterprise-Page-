"use client";

import { useState } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export function ContactForm() {
  const [status, setStatus] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const payload: ContactFormData = {
      name: String(formData.get('name') || ''),
      email: String(formData.get('email') || ''),
      phone: String(formData.get('phone') || ''),
      subject: String(formData.get('subject') || ''),
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
      setStatus('Thank you! We will get back to you shortly.');
      e.currentTarget.reset();
      return;
    }

    setStatus('Failed to submit. Please try again.');
  };

  return (
    <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
      <input className="rounded-lg border border-outline-variant px-4 py-3" name="name" placeholder="Full Name" required type="text" />
      <input className="rounded-lg border border-outline-variant px-4 py-3" name="email" placeholder="Email" required type="email" />
      <input className="rounded-lg border border-outline-variant px-4 py-3" name="phone" placeholder="Phone" required type="tel" />
      <input className="rounded-lg border border-outline-variant px-4 py-3" name="subject" placeholder="Subject" required type="text" />
      <textarea className="rounded-lg border border-outline-variant px-4 py-3" name="message" placeholder="Your Message" rows={5} required />
      <div className="flex items-center justify-between gap-3">
        <button className="group relative rounded-lg bg-gradient-to-r from-primary to-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:shadow-2xl hover:shadow-primary/50 hover:scale-105 active:scale-95 overflow-hidden" type="submit">
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 group-hover:animate-pulse transition-opacity duration-300" />
          <span className="relative">Send Message</span>
        </button>
        {status ? <p className="text-sm text-on-surface-variant">{status}</p> : null}
      </div>
    </form>
  );
}
