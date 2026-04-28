"use client";

import Image from 'next/image';
import { useScroll } from '@/hooks/useScroll';

export function Navbar() {
  const isScrolled = useScroll();

  return (
    <nav
      className={`fixed top-0 z-50 w-full border-b border-slate-200/60 bg-white/90 px-6 py-4 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/90 ${
        isScrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between">
        <Image
          src="/images/icons/logo.webp"
          alt="Accredian"
          width={365}
          height={120}
          className="h-10 w-auto"
          priority
        />
        <div className="hidden gap-8 md:flex">
          <a className="border-b-2 border-blue-600 pb-1 font-bold tracking-tight text-blue-600 antialiased dark:text-blue-400" href="#">Solutions</a>
          <a className="font-medium tracking-tight text-slate-600 antialiased transition-colors hover:text-blue-600 dark:text-slate-400" href="#">Expertise</a>
          <a className="font-medium tracking-tight text-slate-600 antialiased transition-colors hover:text-blue-600 dark:text-slate-400" href="#">Framework</a>
          <a className="font-medium tracking-tight text-slate-600 antialiased transition-colors hover:text-blue-600 dark:text-slate-400" href="#">Results</a>
          <a className="font-medium tracking-tight text-slate-600 antialiased transition-colors hover:text-blue-600 dark:text-slate-400" href="#">FAQ</a>
        </div>
        <div className="flex items-center gap-4">
          <button className="rounded-lg px-5 py-2 font-medium text-slate-600 transition-all duration-200 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-900">Login</button>
          <button className="rounded-lg bg-primary-container px-5 py-2 font-bold text-on-primary-container shadow-md transition-transform active:scale-95">Get Started</button>
        </div>
      </div>
    </nav>
  );
}
