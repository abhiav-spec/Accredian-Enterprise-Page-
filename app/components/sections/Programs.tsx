'use client';

import { useState } from 'react';

export function Programs() {
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);

  const programs = [
    { id: 'genai', icon: 'psychology', title: 'Gen-AI Mastery', shortDesc: 'Leading edge prompt engineering and LLM implementation for businesses.', fullDesc: 'Master cutting-edge AI technologies including prompt engineering, large language models, and practical LLM implementation strategies for enterprise applications.' },
    { id: 'leadership', icon: 'star', title: 'Leadership Elevation', shortDesc: 'Strategic management training for mid to senior-level executives.', fullDesc: 'Develop strategic leadership capabilities through advanced management training, executive coaching, and real-world business case studies.' },
    { id: 'techdata', icon: 'monitoring', title: 'Tech & Data', shortDesc: 'Transforming data into actionable business intelligence and strategy.', fullDesc: 'Learn advanced data analytics, business intelligence tools, and how to transform raw data into strategic business insights.' },
    { id: 'fintech', icon: 'payments', title: 'Fintech Lab', shortDesc: 'Innovating the financial landscape with digital-first solutions.', fullDesc: 'Explore fintech innovations, digital payments, blockchain technology, and the future of financial services.' },
  ];

  return (
    <section id="expertise" className="scroll-mt-28 bg-surface-container-low py-xl">
      <div className="mx-auto max-w-[1200px] px-gutter">
        <h2 className="mb-16 text-center font-h1 text-h1">Domain Expertise</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program) => (
            <div
              key={program.id}
              onClick={() => setSelectedProgram(selectedProgram === program.id ? null : program.id)}
              className={`cursor-pointer rounded-xl border border-outline/10 bg-white p-6 transition-all duration-300 ${
                selectedProgram === program.id
                  ? 'lg:col-span-2 lg:row-span-2 scale-105 shadow-2xl sm:col-span-2'
                  : 'hover:shadow-xl shadow-sm'
              }`}
            >
              <div className={`mb-4 flex items-center justify-center rounded-lg transition-all duration-300 ${
                selectedProgram === program.id ? 'h-24 w-24 bg-primary text-white text-4xl' : 'h-16 w-16 bg-primary/10 text-primary text-2xl'
              }`}>
                <span className={`material-symbols-outlined ${selectedProgram === program.id ? 'text-3xl' : ''}`}>{program.icon}</span>
              </div>
              <h4 className={`mb-2 transition-all duration-300 ${selectedProgram === program.id ? 'font-h1 text-h1' : 'font-h3 text-h3'}`}>
                {program.title}
              </h4>
              <p className="font-caption text-caption text-on-surface-variant">
                {selectedProgram === program.id ? program.fullDesc : program.shortDesc}
              </p>
              {selectedProgram === program.id && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProgram(null);
                  }}
                  className="mt-4 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-all hover:brightness-110"
                >
                  Close
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
