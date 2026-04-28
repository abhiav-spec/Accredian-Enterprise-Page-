import { LeadForm } from '@/app/components/forms/LeadForm';

export function CTA() {
  return (
    <section id="contact" className="mx-auto mb-xl max-w-[1200px] scroll-mt-28 px-gutter">
      <div className="relative overflow-hidden rounded-2xl bg-primary p-xl text-center text-on-primary shadow-2xl">
        <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <h2 className="relative z-10 mb-6 font-display text-display">Want to Learn More About Our Training Solutions?</h2>
        <p className="relative z-10 mx-auto mb-10 max-w-2xl font-body-lg text-body-lg opacity-90">Connect with our learning consultants today to build a future-ready workforce.</p>
        <button className="relative z-10 rounded-lg bg-white px-12 py-4 font-h2 text-h2 text-primary transition-colors hover:bg-blue-50">Contact Us</button>
      </div>
      <div className="mt-12 rounded-xl border border-outline-variant bg-white p-6 shadow-sm">
        <h3 className="mb-4 font-h3 text-h3">Enquire Now</h3>
        <LeadForm />
      </div>
    </section>
  );
}
