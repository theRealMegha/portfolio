const SKILLS_DATA = [
  { name: 'HTML', icon: 'fa-brands fa-html5', level: 'Intermediate', color: '#f97316' },
  { name: 'CSS', icon: 'fa-brands fa-css3-alt', level: 'Basic', color: '#3b82f6' },
  { name: 'JavaScript', icon: 'fa-brands fa-js', level: 'Basic', color: '#eab308' },
  { name: 'Java', icon: 'fa-brands fa-java', level: 'Intermediate', color: '#ef4444' },
  { name: 'Python', icon: 'fa-brands fa-python', level: 'Intermediate', color: '#10b981' },
  { name: 'PHP', icon: 'fa-brands fa-php', level: 'Intermediate', color: '#6366f1' },
  { name: 'PostgreSQL', icon: 'fa-solid fa-database', level: 'Basic', color: '#0ea5e9' },
  { name: 'MySQL', icon: 'fa-solid fa-database', level: 'Intermediate', color: '#06b6d4' },
  { name: 'Git', icon: 'fa-brands fa-git-alt', level: 'Basic', color: '#f43f5e' },
  { name: 'Spring Boot', icon: 'fa-solid fa-leaf', level: 'Basic', color: '#6db33f' },
  { name: 'Django', icon: 'fa-brands fa-python', level: 'Basic', color: '#0c4b33' },
  { name: 'C', icon: 'fa-solid fa-c', level: 'Basic', color: '#94a3b8' },
  { name: 'MongoDB', icon: 'fa-solid fa-leaf', level: 'Basic', color: '#47a248' },
]

export default function Skills() {
  return (
    <section id="skills" className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 z-10 border-t border-zinc-900">
      <div className="text-center space-y-2 mb-16">
        <p className="text-xs font-semibold tracking-wider text-brand-400 uppercase">Explore My</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Skills</h2>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="skills-panel p-6 sm:p-8 md:p-10 rounded-3xl border border-zinc-900 backdrop-blur-sm space-y-8">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-7">
              <div>
                <h3 className="text-lg font-semibold text-zinc-200 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
                  Core Technologies
                </h3>
                <p className="mt-1 text-sm text-zinc-500">Tools I use to build reliable backend-driven applications.</p>
              </div>
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/10 px-3 py-1.5 text-xs font-semibold text-brand-400">
                <i className="fa-solid fa-code" /> {SKILLS_DATA.length} technologies
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {SKILLS_DATA.map((skill, index) => (
              <div
                  key={index}
                  className="group p-5 rounded-2xl border border-zinc-900 bg-zinc-950/40 hover:border-opacity-20 hover:bg-opacity-[0.02] transition-all duration-300 text-center flex flex-col items-center gap-3"
                  style={{ '--hover-color': skill.color }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${skill.color}33`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = ''
                  }}
                >
                  <i
                    className={`${skill.icon} text-3xl transition-all duration-300`}
                    style={{ color: skill.color }}
                  />
                  <div>
                    <h4 className="font-bold text-zinc-200 text-sm">{skill.name}</h4>
                    <p className="text-[11px] text-zinc-500 group-hover:text-zinc-400 mt-0.5 transition-colors">
                      {skill.level}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

