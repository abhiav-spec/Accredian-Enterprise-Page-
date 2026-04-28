'use client';

import { useState } from 'react';

export function Features() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const features = [
    { id: 'tailored', icon: 'architecture', title: 'Tailored Solutions', description: 'Custom curricula designed to meet your specific organizational challenges.' },
    { id: 'framework', icon: 'lightbulb', title: 'Innovative Framework', description: 'Proprietary CAT methodology for maximum retention and application.' },
    { id: 'diverse', icon: 'diversity_3', title: 'Diverse Offerings', description: 'Broad spectrum of domains from Gen-AI to Leadership.' },
    { id: 'impact', icon: 'rocket_launch', title: 'Proven Impact', description: 'Measured ROI and skill gap reduction across all cohorts.' },
  ];

  return (
    <section className="mx-auto max-w-[1200px] px-gutter py-xl">
      <h2 className="mb-16 text-center font-h1 text-h1">The Accredian Edge</h2>
      <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div
            key={feature.id}
            onClick={() => setSelectedCard(feature.id)}
            className="cursor-pointer rounded-xl border-t-4 border-primary bg-white p-md shadow-sm transition-all hover:shadow-lg"
          >
            <span className="material-symbols-outlined mb-4 text-4xl text-primary">{feature.icon}</span>
            <h3 className="mb-2 font-h3 text-h3">{feature.title}</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">{feature.description}</p>
          </div>
        ))}
        <div className="flex items-center gap-8 rounded-xl bg-primary-container p-md text-on-primary-container md:col-span-2 lg:col-span-4">
          <div className="flex-1">
            <h3 className="mb-2 font-h2 text-h2 text-white">Expert Guidance</h3>
            <p className="font-body-lg text-body-lg opacity-90">Direct access to industry veterans and world-class facilitators.</p>
          </div>
          <span className="material-symbols-outlined hidden text-6xl text-white lg:block">workspace_premium</span>
        </div>
      </div>
    </section>
  );
}
