export default function Contact() {
  return (
    <section id="contact" className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 z-10 border-t border-zinc-900">
      <div className="text-center space-y-2 mb-16">
        <p className="text-xs font-semibold tracking-wider text-brand-400 uppercase">Get in Touch</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Contact Me</h2>
      </div>

      <div className="contact-shell max-w-5xl mx-auto relative overflow-hidden rounded-[2rem] border border-zinc-900 p-5 sm:p-10 md:p-12">
        <div className="absolute -top-28 -left-20 w-72 h-72 rounded-full bg-brand-500/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-28 -right-20 w-72 h-72 rounded-full bg-blue-500/15 blur-3xl pointer-events-none" />
        <div className="relative grid grid-cols-1 md:grid-cols-[1.15fr_.85fr] gap-8 md:gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1.5 text-xs font-bold text-green-400">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for opportunities
            </div>
            <h3 className="mt-5 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              Let's create something{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-blue-400">
                meaningful.
              </span>
            </h3>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-400">
              Have a backend role, project, or idea in mind? I would love to hear about it and explore how we can build
              a reliable solution together.
            </p>
            <a
              href="mailto:meghamurukesh9356@gmail.com"
              className="mt-6 inline-flex w-full sm:w-auto justify-center sm:justify-start items-center gap-2 rounded-xl bg-gradient-to-r from-brand-600 to-indigo-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-brand-500/20 hover:from-brand-500 hover:to-indigo-500 hover:-translate-y-0.5 transition"
            >
              <i className="fa-regular fa-paper-plane" /> Start a conversation
            </a>
          </div>

          {/* Right */}
          <div className="grid gap-3">
            <a
              href="mailto:meghamurukesh9356@gmail.com"
              className="contact-link group rounded-2xl border border-zinc-800 bg-zinc-950/40 p-4 sm:p-5 flex items-center gap-3 sm:gap-4 transition min-w-0"
            >
              <span className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400 flex items-center justify-center">
                <i className="fa-regular fa-envelope text-lg" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-xs font-semibold uppercase tracking-wider text-zinc-500">Email</span>
                <span className="mt-1 block truncate text-sm font-bold text-zinc-200">
                  meghamurukesh9356@gmail.com
                </span>
              </span>
              <i className="fa-solid fa-arrow-up-right-from-square shrink-0 ml-auto text-xs text-zinc-500 group-hover:text-brand-400 transition" />
            </a>

            <a
              href="https://www.linkedin.com/in/megha-murukesh-459a72300/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link group rounded-2xl border border-zinc-800 bg-zinc-950/40 p-4 sm:p-5 flex items-center gap-3 sm:gap-4 transition"
            >
              <span className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                <i className="fa-brands fa-linkedin-in text-lg" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-xs font-semibold uppercase tracking-wider text-zinc-500">Connect</span>
                <span className="mt-1 block text-sm font-bold text-zinc-200">LinkedIn profile</span>
              </span>
              <i className="fa-solid fa-arrow-up-right-from-square shrink-0 ml-auto text-xs text-zinc-500 group-hover:text-blue-400 transition" />
            </a>

            <a
              href="https://github.com/theRealMegha"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link group rounded-2xl border border-zinc-800 bg-zinc-950/40 p-4 sm:p-5 flex items-center gap-3 sm:gap-4 transition"
            >
              <span className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-xl bg-zinc-800 border border-zinc-700 text-zinc-200 flex items-center justify-center">
                <i className="fa-brands fa-github text-lg" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-xs font-semibold uppercase tracking-wider text-zinc-500">Explore</span>
                <span className="mt-1 block text-sm font-bold text-zinc-200">GitHub profile</span>
              </span>
              <i className="fa-solid fa-arrow-up-right-from-square shrink-0 ml-auto text-xs text-zinc-500 group-hover:text-white transition" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

 