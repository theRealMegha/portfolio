import profilePic from '/assets/profile-pic.png'

export default function Hero() {
  const handleDownloadResume = () => {
    fetch('/assets/Megha_Murukesh_Resume.pdf')
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.style.display = 'none'
        a.href = url
        a.download = 'Megha_Murukesh_Resume.pdf'
        document.body.appendChild(a)
        a.click()
        window.URL.revokeObjectURL(url)
        document.body.removeChild(a)
      })
      .catch(() => {
        window.open('/assets/Megha_Murukesh_Resume.pdf', '_blank')
      })
  }

  return (
    <section
      id="profile"
      className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 md:pt-28 md:pb-20 flex flex-col-reverse md:flex-row items-center justify-between gap-12 min-h-[calc(100vh-80px)] z-10"
    >
      {/* Left */}
      <div className="flex-1 text-center md:text-left space-y-6 max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-500/20 bg-brand-500/5 text-xs font-semibold text-brand-400 tracking-wide mb-2 select-none">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Open for Backend Developer roles
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Hello, I'm <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-indigo-400 to-blue-400">
            Megha Murukesh
          </span>
        </h1>

        <p className="text-xl md:text-2xl font-semibold text-zinc-300 tracking-wide">
          Backend Developer
        </p>

        <p className="text-zinc-400 leading-relaxed text-base sm:text-lg max-w-xl mx-auto md:mx-0">
          I design and engineer reliable backend codebases, optimize query speeds, and implement modular server
          structures. Committed to producing highly scalable software solutions.
        </p>

        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
          <button
            onClick={handleDownloadResume}
            className="relative group px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white font-semibold shadow-lg shadow-brand-500/25 transition duration-300 transform active:scale-95 flex items-center gap-2"
          >
            My Resume
            <i className="fa-solid fa-download text-sm group-hover:translate-y-[1px] transition-transform" />
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3.5 rounded-xl border border-zinc-800 hover:border-zinc-700 bg-zinc-900/50 hover:bg-zinc-900 text-zinc-300 hover:text-white font-semibold transition duration-300 backdrop-blur-sm active:scale-95"
          >
            Contact Info
          </button>
        </div>

        <div className="flex items-center justify-center md:justify-start gap-4 pt-6 text-zinc-400">
          <a
            href="https://www.linkedin.com/in/megha-murukesh-459a72300/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-brand-400 hover:border-brand-500/30 hover:shadow-lg hover:shadow-brand-500/5 transition-all duration-300 active:scale-95"
            aria-label="LinkedIn"
          >
            <i className="fa-brands fa-linkedin-in text-lg" />
          </a>
          <a
            href="https://github.com/theRealMegha"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-brand-400 hover:border-brand-500/30 hover:shadow-lg hover:shadow-brand-500/5 transition-all duration-300 active:scale-95"
            aria-label="Github"
          >
            <i className="fa-brands fa-github text-lg" />
          </a>
        </div>
      </div>

      {/* Right */}
      <div className="flex-1 w-full max-w-[320px] sm:max-w-sm md:max-w-md relative flex justify-center group">
        <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-brand-500/30 to-indigo-500/30 blur-3xl group-hover:from-brand-500/45 group-hover:to-indigo-500/45 transition duration-700" />
        <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-full p-2 bg-gradient-to-br from-brand-400 via-indigo-500 to-blue-500 shadow-2xl shadow-brand-500/20 animate-float">
          <div className="w-full h-full rounded-full overflow-hidden border-4 border-zinc-950 bg-zinc-900">
            <img
              src={profilePic}
              alt="Megha Murukesh portrait"
              className="w-full h-full object-cover object-center transition duration-700 ease-in-out select-none group-hover:scale-105"
            />
          </div>
          <div
            className="absolute bottom-5 right-4 w-12 h-12 rounded-full border-4 border-zinc-950 bg-green-500 shadow-lg flex items-center justify-center"
            title="Available for work"
          >
            <i className="fa-solid fa-check text-white text-sm" />
          </div>
        </div>
      </div>
    </section>
  )
}

