'use client';

import { useState } from 'react';
import { LeadForm } from '@/app/components/forms/LeadForm';
import { ContactForm } from '@/app/components/forms/ContactForm';

export function CTA() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <section id="contact" className="mx-auto mb-xl max-w-[1200px] scroll-mt-28 px-gutter">
      <div className="relative overflow-hidden rounded-2xl bg-primary p-xl text-center text-on-primary shadow-2xl">
        <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <h2 className="relative z-10 mb-6 font-display text-display">Want to Learn More About Our Training Solutions?</h2>
        <p className="relative z-10 mx-auto mb-10 max-w-2xl font-body-lg text-body-lg opacity-90">Connect with our learning consultants today to build a future-ready workforce.</p>
        <div className="relative z-10 flex items-center justify-center gap-4">
          <button
            onClick={() => setIsContactModalOpen(true)}
            className="group relative rounded-lg bg-white px-12 py-4 font-h2 text-h2 text-primary transition-all duration-300 hover:bg-gradient-to-r hover:from-white hover:to-blue-50 hover:shadow-2xl hover:shadow-white/50 hover:scale-105 active:scale-95 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-10 group-hover:animate-pulse transition-opacity duration-300" />
            <span className="relative flex items-center justify-center gap-2">
              Contact Us
              <span className="text-xl font-bold text-primary transition-transform group-hover:-translate-x-1">←</span>
            </span>
          </button>
          <button
            onClick={() => setIsEnquiryModalOpen(true)}
            className="group relative rounded-lg bg-white/20 px-12 py-4 font-h2 text-h2 text-white backdrop-blur-md transition-all duration-300 hover:bg-white/30 hover:shadow-2xl hover:shadow-white/50 hover:scale-105 active:scale-95 overflow-hidden border border-white/30"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 group-hover:animate-pulse transition-opacity duration-300" />
            <span className="relative flex items-center justify-center gap-2">
              Enquiry
              <span className="text-xl font-bold transition-transform group-hover:translate-x-1">→</span>
            </span>
          </button>
        </div>
      </div>

      {isContactModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setIsContactModalOpen(false)}
        >
          <div
            className="relative w-full max-w-lg rounded-2xl bg-white shadow-2xl animate-in scale-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="border-b border-outline-variant px-8 py-6 flex items-center justify-between">
              <h2 className="font-h1 text-h1">Contact Us</h2>
              <button
                onClick={() => setIsContactModalOpen(false)}
                className="rounded-lg p-2 transition-colors hover:bg-surface-container"
              >
                <span className="material-symbols-outlined text-2xl">close</span>
              </button>
            </div>
            <div className="px-8 py-6 max-h-[70vh] overflow-y-auto">
              <ContactForm />
            </div>
          </div>
        </div>
      )}

      {isEnquiryModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setIsEnquiryModalOpen(false)}
        >
          <div
            className="relative w-full max-w-lg rounded-2xl bg-white shadow-2xl animate-in scale-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="border-b border-outline-variant px-8 py-6 flex items-center justify-between">
              <h2 className="font-h1 text-h1">Enquiry Form</h2>
              <button
                onClick={() => setIsEnquiryModalOpen(false)}
                className="rounded-lg p-2 transition-colors hover:bg-surface-container"
              >
                <span className="material-symbols-outlined text-2xl">close</span>
              </button>
            </div>
            <div className="px-8 py-6 max-h-[70vh] overflow-y-auto">
              <LeadForm />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
