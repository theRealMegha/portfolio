import { useState, useEffect, useCallback } from 'react'

const PROJECTS_DATA = [
  {
    title: 'Mediwise Health App',
    description:
      'MediWise is a multi-module web platform that uses machine learning to predict blood disorders (such as anemia and clotting abnormalities) from structured lab report panels. It connects patients, doctors, pathologists, and pharmacists within a single ecosystem for early clinical intervention and treatment tracking.',
    image: '/assets/mediwise.png',
    tags: ['Python', 'Tailwind CSS', 'AI / ML', 'Django'],
    github: 'https://github.com/theRealMegha/mediwise-dummy',
    demo: 'https://mediwise-app.vercel.app',
  },
  {
    title: 'Evento - Fest Management',
    description:
      'Spearheaded the end-to-end development of a comprehensive web-based management platform designed to optimize college fests by combining secure user registration, centralized event coordination, and robust payment processing into a unified ecosystem.',
    image: '/assets/Evento.png',
    tags: ['JavaScript', 'HTML5', 'PHP', 'MySQL'],
    github: 'https://github.com/theRealMegha',
    demo: 'https://github.com/theRealMegha',
  },
  {
    title: 'Cast Me In - Search Engine',
    description:
      'Architected and developed a robust web platform connecting creative talent with casting professionals, featuring a core search engine built with Spring Boot and optimized backend filtering logic that improved data retrieval efficiency by 20%.',
    image: '/assets/project-3.png',
    tags: ['Java', 'SpringBoot', 'REST API', 'MySQL', ],
    github: 'https://github.com/theRealMegha',
    demo: 'https://github.com/theRealMegha',
  },
  {
    title: 'Demo Project',
    description:
      'A reserved space for your next project showcase. Replace this card with your project image, description, GitHub link, and live demo when ready.',
    image: null,
    tags: ['Coming Soon', 'Your Stack'],
    github: null,
    demo: null,
    isPlaceholder: true,
  },
]

export default function Projects() {
  const [expanded, setExpanded] = useState(false)
  const [visibleCount, setVisibleCount] = useState(3)

  const updateVisibleCount = useCallback(() => {
    setVisibleCount(window.innerWidth < 768 ? 2 : 3)
  }, [])

  useEffect(() => {
    updateVisibleCount()
    window.addEventListener('resize', updateVisibleCount)
    return () => window.removeEventListener('resize', updateVisibleCount)
  }, [updateVisibleCount])

  const hasExtraProjects = PROJECTS_DATA.length > visibleCount
  const visibleProjects = expanded
    ? PROJECTS_DATA
    : PROJECTS_DATA.slice(0, visibleCount)
  const hiddenCount = PROJECTS_DATA.length - visibleCount

  return (
    <section id="projects" className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 z-10 border-t border-zinc-900">
      <div className="text-center space-y-2 mb-16">
        <p className="text-xs font-semibold tracking-wider text-brand-400 uppercase">Browse My Recent</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Projects</h2>
        <p className="max-w-xl mx-auto pt-2 text-sm sm:text-base text-zinc-400">
          A selection of interfaces and applications built with thoughtful structure and practical user experiences.
        </p>
      </div>

      <div className="projects-showcase grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {visibleProjects.map((project, index) => (
          <div
            key={index}
            className="group rounded-2xl border border-zinc-900 bg-zinc-900/10 overflow-hidden hover:border-brand-500/20 hover:shadow-xl hover:shadow-brand-500/[0.02] transition-all duration-300 flex flex-col"
          >
            {/* Image */}
            {project.isPlaceholder ? (
              <div className="relative overflow-hidden aspect-video border-b border-zinc-900/60 bg-gradient-to-br from-brand-950 via-zinc-900 to-indigo-950 flex items-center justify-center">
                <div className="absolute w-40 h-40 rounded-full bg-brand-500/20 blur-3xl" />
                <div className="relative w-20 h-20 rounded-2xl border border-brand-400/30 bg-brand-500/10 flex items-center justify-center text-brand-300 shadow-xl shadow-brand-500/10 group-hover:scale-110 group-hover:rotate-3 transition duration-500">
                  <i className="fa-solid fa-cubes text-3xl" />
                </div>
                <span className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-zinc-950/70 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-300 backdrop-blur">
                  Demo concept
                </span>
              </div>
            ) : (
              <div className="relative overflow-hidden aspect-video border-b border-zinc-900/60 bg-zinc-900">
                <img
                  src={project.image}
                  alt={`${project.title} overview`}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-500 select-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-60" />
              </div>
            )}

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white group-hover:text-brand-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded text-[10px] font-semibold bg-zinc-900 border border-zinc-800 text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 rounded-lg border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300 hover:text-white text-center font-medium text-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <i className="fa-brands fa-github text-sm" /> Code
                  </a>
                ) : (
                  <span className="flex-1 py-2 rounded-lg border border-zinc-800 bg-zinc-900/60 text-zinc-500 text-center font-medium text-xs flex items-center justify-center gap-1.5">
                    <i className="fa-solid fa-code text-sm" /> Add Code
                  </span>
                )}
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 rounded-lg bg-brand-600 hover:bg-brand-500 text-white text-center font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-brand-600/10"
                  >
                    Live Demo <i className="fa-solid fa-arrow-up-right-from-square text-[10px]" />
                  </a>
                ) : (
                  <span className="flex-1 py-2 rounded-lg bg-brand-600/40 text-brand-200 text-center font-semibold text-xs flex items-center justify-center gap-1.5">
                    Coming Soon <i className="fa-solid fa-clock text-[10px]" />
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {hasExtraProjects && (
        <div className="mt-10 text-center">
          <button
            onClick={() => setExpanded(prev => !prev)}
            type="button"
            className="inline-flex items-center gap-2 rounded-xl border border-brand-500/30 bg-brand-500/10 px-5 py-3 text-sm font-semibold text-brand-400 hover:bg-brand-500 hover:text-white transition-colors"
          >
            {expanded
              ? 'Show fewer projects'
              : `Show ${hiddenCount} more project${hiddenCount === 1 ? '' : 's'}`}{' '}
            <i className={`fa-solid text-xs ${expanded ? 'fa-chevron-up' : 'fa-chevron-down'}`} />
          </button>
        </div>
      )}
    </section>
  )
}

