'use client';

import { useState } from 'react';
import Image from 'next/image';

export function Benefits() {
  const [activeFaqTab, setActiveFaqTab] = useState<'course' | 'delivery' | 'misc'>('course');

  const faqData = {
    course: [
      { q: 'How long are the enterprise training programs?', a: 'Our programs range from intensive 2-day workshops to comprehensive 6-month continuous learning tracks, depending on the domain and depth required.' },
      { q: 'Can the curriculum be customized for our industry?', a: 'Yes, customization is a key part of our service. We adapt case studies, examples, and toolsets to match your specific industry vertical.' },
      { q: 'What kind of support is provided post-training?', a: 'We provide 3 months of implementation support, office hours for alumni, and detailed progress reports for HR stakeholders.' },
    ],
    delivery: [
      { q: 'What delivery modes do you offer?', a: 'We offer virtual, in-person, and hybrid training options tailored to your enterprise needs and scheduling preferences.' },
      { q: 'Can we conduct training during business hours?', a: 'Yes, we work with your team to schedule training at times that minimize disruption to your operations.' },
      { q: 'Is live instructor interaction included?', a: 'Absolutely. All our programs feature live expert instructors who provide real-time feedback and guidance throughout the training.' },
    ],
    misc: [
      { q: 'Do you provide training materials and resources?', a: 'Yes, we provide comprehensive training materials, slide decks, workbooks, and online resources available after the training concludes.' },
      { q: 'What is your approach to measuring training effectiveness?', a: 'We use multiple metrics including pre/post assessments, behavioral observations, and 90-day impact reviews to measure training effectiveness.' },
      { q: 'Can we integrate training with our existing learning management system?', a: 'Yes, we can integrate our training programs with your LMS and provide tracking data for seamless administration.' },
    ],
  };

  return (
    <>
      <section id="framework" className="mx-auto max-w-[1200px] scroll-mt-28 px-gutter py-xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-h1 text-h1">The CAT Framework</h2>
          <p className="mx-auto max-w-2xl font-body-lg text-body-lg text-on-surface-variant">Our unique 3-step pedagogical approach designed for deep learning and immediate professional application.</p>
        </div>
        <div className="relative flex flex-col items-start justify-between gap-12 md:flex-row">
          <div className="absolute left-1/4 right-1/4 top-1/4 z-0 hidden h-0.5 border-t-2 border-dashed border-primary-fixed-dim md:block" />
          <div className="relative z-10 flex-1 rounded-xl border border-outline-variant bg-white p-8 text-center shadow-sm">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary font-display text-h1 text-white">1</div>
            <h3 className="mb-3 font-h2 text-h2">Concept</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Mastering the theoretical foundations and core logic of the domain.</p>
          </div>
          <div className="relative z-10 flex-1 rounded-xl border border-outline-variant bg-white p-8 text-center shadow-sm">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary font-display text-h1 text-white">2</div>
            <h3 className="mb-3 font-h2 text-h2">Application</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Hands-on case studies and real-world project simulations.</p>
          </div>
          <div className="relative z-10 flex-1 rounded-xl border border-outline-variant bg-white p-8 text-center shadow-sm">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary font-display text-h1 text-white">3</div>
            <h3 className="mb-3 font-h2 text-h2">Tools</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Proficiency in industry-standard software and analytical platforms.</p>
          </div>
        </div>
      </section>

      <section className="bg-inverse-surface py-xl text-inverse-on-surface">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-xl px-gutter md:flex-row">
          <div className="flex-1">
            <h2 className="mb-6 font-h1 text-h1">Structured Success</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-primary-fixed">analytics</span>
                <div>
                  <h4 className="mb-1 font-h3 text-h3 text-white">Skill Gap Analysis</h4>
                  <p className="opacity-80">We identify exactly where your team needs growth before we start.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-primary-fixed">edit_note</span>
                <div>
                  <h4 className="mb-1 font-h3 text-h3 text-white">Customized Training Plan</h4>
                  <p className="opacity-80">Curriculum is adjusted based on analysis results for maximum relevance.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-primary-fixed">event_available</span>
                <div>
                  <h4 className="mb-1 font-h3 text-h3 text-white">Flexible Program Delivery</h4>
                  <p className="opacity-80">Virtual, in-person, or hybrid sessions to fit your enterprise schedule.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                alt="Training Session"
                className="h-full w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmBQzExzJknncbCFEc3cRkPR2Z7a-EisbniDIaa5myetzlOPRCkXbLf2JVudCyOYcvMG-cD7QKm4MU5P27UmpVhV3dH_tzKfKUfFjag95DvvV7OSiochpwrJUfOFJTA7Yb0x2f_f-SASMDRo2msrGo5_Q9yiyM4oGnyYgaVrFw77XqO9KU96HaiA3xCNS4ciDdD-_6WAlznPpaPyvjqqOEStrVVxL69BxZJ2cFvgoM-trn9mR6m6Hno_A9p8IQVoY8gaCL0gc-Tthk"
                width={600}
                height={800}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-[1200px] scroll-mt-28 px-gutter py-xl">
        <h2 className="mb-16 text-center font-h1 text-h1">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
          <div className="space-y-2 md:col-span-1">
            <button
              onClick={() => setActiveFaqTab('course')}
              className={`w-full rounded-lg px-6 py-4 text-left font-label-md transition-all ${
                activeFaqTab === 'course'
                  ? 'bg-primary-container text-white'
                  : 'bg-white hover:bg-surface-container'
              }`}
            >
              About the Course
            </button>
            <button
              onClick={() => setActiveFaqTab('delivery')}
              className={`w-full rounded-lg px-6 py-4 text-left font-label-md transition-all ${
                activeFaqTab === 'delivery'
                  ? 'bg-primary-container text-white'
                  : 'bg-white hover:bg-surface-container'
              }`}
            >
              About the Delivery
            </button>
            <button
              onClick={() => setActiveFaqTab('misc')}
              className={`w-full rounded-lg px-6 py-4 text-left font-label-md transition-all ${
                activeFaqTab === 'misc'
                  ? 'bg-primary-container text-white'
                  : 'bg-white hover:bg-surface-container'
              }`}
            >
              Miscellaneous
            </button>
          </div>
          <div className="space-y-4 md:col-span-2">
            {faqData[activeFaqTab].map((item, idx) => (
              <details key={idx} className="group rounded-xl border border-outline-variant bg-white p-4">
                <summary className="flex cursor-pointer list-none items-center justify-between font-h3 text-h3">
                  <span>{item.q}</span>
                  <span className="text-xl font-semibold transition-transform group-open:rotate-180">^</span>
                </summary>
                <div className="pt-4 font-body-md text-on-surface-variant">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
