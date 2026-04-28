export function Hero() {
  return (
    <section id="home" className="mx-auto flex max-w-[1200px] scroll-mt-28 flex-col items-center gap-12 px-gutter py-xl md:flex-row">
      <div className="flex-1">
        <h1 className="mb-6 font-display text-display text-on-background">Next-Gen Expertise For Your Enterprise</h1>
        <p className="mb-8 max-w-xl font-body-lg text-body-lg text-on-surface-variant">
          Cultivate high-performance teams through industry-leading human capital management solutions tailored for the evolving corporate landscape.
        </p>
        <div className="mb-10 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-xl font-semibold text-black">✓</span>
            <span className="font-label-md text-label-md">Tailored Solutions</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xl font-semibold text-black">✓</span>
            <span className="font-label-md text-label-md">Industry Insights</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xl font-semibold text-black">✓</span>
            <span className="font-label-md text-label-md">Expert Guidance</span>
          </div>
        </div>
        <button className="group relative rounded-lg bg-gradient-to-r from-primary to-blue-600 px-10 py-4 font-h3 text-h3 text-on-primary shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-primary/50 hover:scale-105 active:scale-95 overflow-hidden">
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 group-hover:animate-pulse transition-opacity duration-300" />
          <span className="relative flex items-center justify-center gap-2">
            Enquire Now
            <span className="text-xl font-bold text-black transition-transform group-hover:-translate-x-1">←</span>
          </span>
        </button>
      </div>
      <div className="relative flex-1">
        <div className="absolute -left-4 -top-4 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <img
          alt="Corporate Team Working"
          className="relative z-10 aspect-[4/3] w-full rounded-xl object-cover shadow-2xl"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJ3nN2lNnMdRHsyyvw4t3fPGgn8moLtMCH8id1ejfoOfFtFjg_OdjPp0dmUO-ay72_XPdE3Xb0QYjqIO6DVfAdTQrurSg5w3It5GWFMRYuk0IduUvH8zmOuBZnIh-vhVvvN5oTWBOsVNoKlTdHWI353jgOyrYWjcVZ-k8EFpLfB93QhVFsc-bbaJ4ErlzdAgxUxD51E_HhenZht3DgP2ymjEcQXrJes4ExVtx4LXLf2689NC-9tEExo01Fs78gnGL9FUnOa315Z2kj"
        />
      </div>
    </section>
  );
}
