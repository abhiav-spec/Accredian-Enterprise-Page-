import { Hero } from '@/app/components/sections/Hero';
import { Stats } from '@/app/components/sections/Stats';
import { Logos } from '@/app/components/sections/Logos';
import { Features } from '@/app/components/sections/Features';
import { Programs } from '@/app/components/sections/Programs';
import { Benefits } from '@/app/components/sections/Benefits';
import { CTA } from '@/app/components/sections/CTA';

export default function Home() {
  return (
    <main className="pt-24 overflow-x-hidden">
      <Hero />
      <Stats />
      <Logos />
      <Features />
      <Programs />
      <Benefits />
      <CTA />
    </main>
  );
}
