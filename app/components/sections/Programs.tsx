export function Programs() {
  return (
    <section id="expertise" className="scroll-mt-28 bg-surface-container-low py-xl">
      <div className="mx-auto max-w-[1200px] px-gutter">
        <h2 className="mb-16 text-center font-h1 text-h1">Domain Expertise</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="group rounded-xl border border-outline/10 bg-white p-6 transition-all hover:shadow-xl">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
              <span className="material-symbols-outlined">psychology</span>
            </div>
            <h4 className="mb-2 font-h3 text-h3">Gen-AI Mastery</h4>
            <p className="font-caption text-caption text-on-surface-variant">Leading edge prompt engineering and LLM implementation for businesses.</p>
          </div>
          <div className="group rounded-xl border border-outline/10 bg-white p-6 transition-all hover:shadow-xl">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
              <span className="material-symbols-outlined">star</span>
            </div>
            <h4 className="mb-2 font-h3 text-h3">Leadership Elevation</h4>
            <p className="font-caption text-caption text-on-surface-variant">Strategic management training for mid to senior-level executives.</p>
          </div>
          <div className="group rounded-xl border border-outline/10 bg-white p-6 transition-all hover:shadow-xl">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
              <span className="material-symbols-outlined">monitoring</span>
            </div>
            <h4 className="mb-2 font-h3 text-h3">Tech &amp; Data</h4>
            <p className="font-caption text-caption text-on-surface-variant">Transforming data into actionable business intelligence and strategy.</p>
          </div>
          <div className="group rounded-xl border border-outline/10 bg-white p-6 transition-all hover:shadow-xl">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
              <span className="material-symbols-outlined">payments</span>
            </div>
            <h4 className="mb-2 font-h3 text-h3">Fintech Lab</h4>
            <p className="font-caption text-caption text-on-surface-variant">Innovating the financial landscape with digital-first solutions.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
