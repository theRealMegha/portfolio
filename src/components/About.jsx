import aboutPic from '/assets/about-pic.jpg'

export default function About() {
  return (
    <section id="about" className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 z-10 border-t border-zinc-900">
      <div className="text-center space-y-2 mb-16">
        <p className="text-xs font-semibold tracking-wider text-brand-400 uppercase">Get To Know More</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">About Me</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">
        {/* Portrait */}
        <div className="about-portrait lg:col-span-2 relative min-h-[420px] rounded-3xl overflow-hidden border border-white/10 bg-zinc-900/40 group">
          <img
            src={aboutPic}
            alt="Megha Murukesh profile detail"
            className="absolute inset-0 w-full h-full object-cover object-center transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
          <div className="absolute left-6 right-6 bottom-6">
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300 font-bold">Backend Developer</p>
            <p className="mt-2 text-xl font-bold text-white">Engineering the systems behind great products.</p>
          </div>
          <div className="absolute top-5 right-5 w-11 h-11 rounded-full border border-white/20 bg-zinc-950/70 backdrop-blur flex items-center justify-center text-brand-400">
            <i className="fa-solid fa-code" />
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          <div className="relative overflow-hidden flex-1 rounded-3xl border border-zinc-900 bg-zinc-900/10 p-7 md:p-9 backdrop-blur-sm">
            <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-brand-500/10 blur-3xl pointer-events-none" />
            <div className="relative">
              <div className="flex items-center gap-3">
                <span className="w-11 h-11 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400">
                  <i className="fa-solid fa-layer-group" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-400">My approach</p>
                  <h3 className="text-xl font-bold text-white">Professional Background</h3>
                </div>
              </div>
              <p className="mt-6 text-zinc-400 leading-relaxed">
                Ambitious Backend Developer and MCA graduate dedicated to building the core logic and infrastructure
                of modern applications. I focus on engineering efficient server-side systems, optimizing database
                performance, and writing clean, maintainable code.
              </p>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                Passionate about solving complex structural problems and committed to developing scalable software
                solutions from the ground up.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-zinc-900 bg-zinc-900/10 p-5">
              <i className="fa-solid fa-server text-brand-400" />
              <p className="mt-3 text-sm font-bold text-white">Backend Systems</p>
              <p className="mt-1 text-xs text-zinc-400">Reliable, modular services</p>
            </div>
            <div className="rounded-2xl border border-zinc-900 bg-zinc-900/10 p-5">
              <i className="fa-solid fa-database text-indigo-400" />
              <p className="mt-3 text-sm font-bold text-white">Data Performance</p>
              <p className="mt-1 text-xs text-zinc-400">Optimized queries and design</p>
            </div>
            <div className="rounded-2xl border border-zinc-900 bg-zinc-900/10 p-5">
              <i className="fa-solid fa-diagram-project text-blue-400" />
              <p className="mt-3 text-sm font-bold text-white">Architecture</p>
              <p className="mt-1 text-xs text-zinc-400">Built for scale and clarity</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

