export function Stats() {
  return (
    <section className="bg-primary py-lg text-on-primary">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 px-gutter text-center md:grid-cols-3">
        <div>
          <p className="font-display text-display">10K+</p>
          <p className="font-label-md text-label-md opacity-90">Professionals Trained</p>
        </div>
        <div>
          <p className="font-display text-display">200+</p>
          <p className="font-label-md text-label-md opacity-90">Sessions Delivered</p>
        </div>
        <div>
          <p className="font-display text-display">5K+</p>
          <p className="font-label-md text-label-md opacity-90">Active Learners</p>
        </div>
      </div>
    </section>
  );
}
