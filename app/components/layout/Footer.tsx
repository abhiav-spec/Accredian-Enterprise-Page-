import Image from 'next/image';

export function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-8 px-8 py-12 md:flex-row">
        <div>
          <Image
            src="/images/icons/logo.webp"
            alt="Accredian"
            width={365}
            height={120}
            className="h-9 w-auto"
          />
          <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            © 2024 EduEnterprise Human Capital Management. All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <a className="text-sm leading-relaxed text-slate-500 transition-all hover:text-blue-500 hover:underline dark:text-slate-400" href="#">Privacy Policy</a>
          <a className="text-sm leading-relaxed text-slate-500 transition-all hover:text-blue-500 hover:underline dark:text-slate-400" href="#">Terms of Service</a>
          <a className="text-sm leading-relaxed text-slate-500 transition-all hover:text-blue-500 hover:underline dark:text-slate-400" href="#">Contact Us</a>
          <a className="text-sm leading-relaxed text-slate-500 transition-all hover:text-blue-500 hover:underline dark:text-slate-400" href="#">Global Presence</a>
          <a className="text-sm leading-relaxed text-slate-500 transition-all hover:text-blue-500 hover:underline dark:text-slate-400" href="#">Cookie Settings</a>
        </div>
      </div>
    </footer>
  );
}
