'use client';

import { useState } from 'react';

export function Features() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const features = [
    { id: 'tailored', icon: 'architecture', title: 'Tailored Solutions', description: 'Custom curricula designed to meet your specific organizational challenges.', details: 'We design bespoke learning solutions that align perfectly with your organizational goals and industry challenges.' },
    { id: 'framework', icon: 'lightbulb', title: 'Innovative Framework', description: 'Proprietary CAT methodology for maximum retention and application.', details: 'Our Concept-Application-Tools framework ensures deep understanding and practical implementation.' },
    { id: 'diverse', icon: 'diversity_3', title: 'Diverse Offerings', description: 'Broad spectrum of domains from Gen-AI to Leadership.', details: 'From cutting-edge artificial intelligence to strategic leadership, we cover the domains that matter.' },
    { id: 'impact', icon: 'rocket_launch', title: 'Proven Impact', description: 'Measured ROI and skill gap reduction across all cohorts.', details: 'Our measurable outcomes include 10K+ trained professionals and consistent skill improvements.' },
  ];

  return (
    <section className="mx-auto max-w-[1200px] px-gutter py-xl">
      <h2 className="mb-16 text-center font-h1 text-h1">The Accredian Edge</h2>
      <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div
            key={feature.id}
            onClick={() => setSelectedCard(selectedCard === feature.id ? null : feature.id)}
            className={`cursor-pointer rounded-xl border-t-4 border-primary bg-white p-md shadow-sm transition-all duration-300 hover:shadow-lg ${
              selectedCard === feature.id
                ? 'lg:col-span-2 lg:row-span-2 scale-105 shadow-2xl md:col-span-2'
                : 'scale-100'
            }`}
          >
            <span className={`material-symbols-outlined mb-4 transition-all duration-300 ${selectedCard === feature.id ? 'text-6xl' : 'text-4xl'} text-primary`}>
              {feature.icon}
            </span>
            <h3 className={`mb-2 transition-all duration-300 ${selectedCard === feature.id ? 'font-h1 text-h1' : 'font-h3 text-h3'}`}>
              {feature.title}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {selectedCard === feature.id ? feature.details : feature.description}
            </p>
            {selectedCard === feature.id && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedCard(null);
                }}
                className="mt-4 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-all hover:brightness-110"
              >
                Close
              </button>
            )}
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
