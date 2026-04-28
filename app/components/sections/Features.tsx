export function Features() {
  return (
    <section className="mx-auto max-w-[1200px] px-gutter py-xl">
      <h2 className="mb-16 text-center font-h1 text-h1">The Accredian Edge</h2>
      <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
        <div className="rounded-xl border-t-4 border-primary bg-white p-md shadow-sm">
          <span className="material-symbols-outlined mb-4 text-4xl text-primary">architecture</span>
          <h3 className="mb-2 font-h3 text-h3">Tailored Solutions</h3>
          <p className="font-body-md text-body-md text-on-surface-variant">Custom curricula designed to meet your specific organizational challenges.</p>
        </div>
        <div className="rounded-xl border-t-4 border-primary bg-white p-md shadow-sm">
          <span className="material-symbols-outlined mb-4 text-4xl text-primary">lightbulb</span>
          <h3 className="mb-2 font-h3 text-h3">Innovative Framework</h3>
          <p className="font-body-md text-body-md text-on-surface-variant">Proprietary CAT methodology for maximum retention and application.</p>
        </div>
        <div className="rounded-xl border-t-4 border-primary bg-white p-md shadow-sm">
          <span className="material-symbols-outlined mb-4 text-4xl text-primary">diversity_3</span>
          <h3 className="mb-2 font-h3 text-h3">Diverse Offerings</h3>
          <p className="font-body-md text-body-md text-on-surface-variant">Broad spectrum of domains from Gen-AI to Leadership.</p>
        </div>
        <div className="rounded-xl border-t-4 border-primary bg-white p-md shadow-sm">
          <span className="material-symbols-outlined mb-4 text-4xl text-primary">rocket_launch</span>
          <h3 className="mb-2 font-h3 text-h3">Proven Impact</h3>
          <p className="font-body-md text-body-md text-on-surface-variant">Measured ROI and skill gap reduction across all cohorts.</p>
        </div>
        <div className="flex items-center gap-8 rounded-xl bg-primary-container p-md text-on-primary-container md:col-span-2">
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
