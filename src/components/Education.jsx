const EDUCATION_DATA = [
  {
    period: '2024 – 2026',
    title: 'Master of Computer Applications',
    subtitle: 'MG University',
    badge: 'De Paul Institute of Science & Technology (DiST), Angamaly',
    note: 'Developed advanced expertise in software engineering, application development, and modern computing practices. Completed with ',
    highlight: '83%',
    color: 'brand',
    icon: 'fa-graduation-cap',
    align: 'right',
  },
  {
    period: '2021 – 2024',
    title: 'Bachelor of Computer Application',
    subtitle: 'Calicut University',
    badge: 'Naipunnya Institute of Management and Information Technology (NIMIT), Pongam',
    note: 'Built a strong foundation in Data Structures, Algorithms, and Web Development. Served as team lead for the college project and graduated with ',
    highlight: '80%',
    color: 'indigo',
    icon: 'fa-graduation-cap',
    align: 'left',
  },
  {
    period: '2019 - 2021',
    title: 'Higher Secondary (12th)',
    subtitle: 'Bio Science Stream',
    badge: "St. Antony's HSS, Mala",
    note: 'Studied Biology, Physics, Chemistry, and Mathematics, developing a strong scientific foundation. Graduated with ',
    highlight: '92% marks',
    color: 'blue',
    icon: 'fa-school',
    align: 'right',
  },
  {
    period: 'Completed in 2019',
    title: 'Secondary School (10th)',
    subtitle: '',
    badge: 'SCGHSS, Mala',
    note: 'Completed secondary education with a well-rounded academic foundation and achieved ',
    highlight: '100% marks',
    color: 'sky',
    icon: 'fa-school',
    align: 'left',
  },
]

const COLOR_MAP = {
  brand: {
    bg: 'brand-500',
    border: 'brand-500/20',
    bgInner: 'brand-500/[0.06]',
    text: 'brand-400',
    shadow: 'brand-500/30',
  },
  indigo: {
    bg: 'indigo-500',
    border: 'indigo-500/20',
    bgInner: 'indigo-500/[0.06]',
    text: 'indigo-400',
    shadow: 'indigo-500/30',
  },
  blue: {
    bg: 'blue-500',
    border: 'blue-500/20',
    bgInner: 'blue-500/[0.06]',
    text: 'blue-400',
    shadow: 'blue-500/30',
  },
  sky: {
    bg: 'sky-500',
    border: 'sky-500/20',
    bgInner: 'sky-500/[0.06]',
    text: 'sky-400',
    shadow: 'sky-500/30',
  },
}

export default function Education() {
  return (
    <section id="education" className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 z-10 border-t border-zinc-900">
      <div className="text-center space-y-2 mb-16">
        <p className="text-xs font-semibold tracking-wider text-brand-400 uppercase">Academic Foundation</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Education</h2>
      </div>

      <div className="max-w-5xl mx-auto relative">
        <div className="absolute left-5 md:left-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-brand-500 via-indigo-500 to-sky-500" />

        <div className="relative grid gap-8">
          {EDUCATION_DATA.map((item, index) => {
            const colors = COLOR_MAP[item.color]
            const isRight = item.align === 'right'

            return (
              <article key={index} className="grid md:grid-cols-2 md:gap-14 items-center">
                {/* Period badge (desktop) */}
                {isRight ? (
                  <div className="hidden md:block text-right">
                    <span
                      className={`inline-block px-4 py-2 rounded-full bg-${colors.text.replace('400', '500/10')} border border-${colors.border} text-sm font-bold text-${colors.text}`}
                      style={{
                        backgroundColor: `rgba(139,92,246,0.1)`,
                        borderColor: `rgba(139,92,246,0.2)`,
                        color: item.color === 'brand' ? '#a78bfa' : item.color === 'indigo' ? '#818cf8' : item.color === 'blue' ? '#60a5fa' : '#38bdf8',
                      }}
                    >
                      {item.period}
                    </span>
                  </div>
                ) : null}

                {/* Content */}
                <div className={`relative pl-14 ${!isRight ? 'md:pl-0 md:pr-14 md:order-1' : 'md:pl-14'}`}>
                  <span
                    className={`absolute left-0 ${isRight ? 'md:-left-[31px]' : 'md:left-auto md:-right-[31px]'} top-5 w-10 h-10 rounded-full border-4 border-zinc-950 bg-${colors.bg} flex items-center justify-center text-white shadow-lg shadow-${colors.shadow}`}
                    style={{
                      backgroundColor: item.color === 'brand' ? '#8b5cf6' : item.color === 'indigo' ? '#6366f1' : item.color === 'blue' ? '#3b82f6' : '#0ea5e9',
                      boxShadow: `0 10px 15px -3px rgba(139,92,246,0.3)`,
                    }}
                  >
                    <i className={`fa-solid ${item.icon} text-sm`} />
                  </span>

                  <div
                    className={`rounded-2xl border border-${colors.border} bg-${colors.bgInner} p-6 backdrop-blur-sm hover:-translate-y-1 transition-transform ${
                      !isRight ? 'md:text-right' : ''
                    }`}
                    style={{
                      borderColor: `rgba(139,92,246,0.2)`,
                      backgroundColor: `rgba(139,92,246,0.06)`,
                    }}
                  >
                    <p className={`md:hidden text-sm font-bold text-${colors.text} mb-3`}
                      style={{ color: item.color === 'brand' ? '#a78bfa' : item.color === 'indigo' ? '#818cf8' : item.color === 'blue' ? '#60a5fa' : '#38bdf8' }}
                    >
                      {item.period}
                    </p>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    {item.subtitle && (
                      <p className="mt-1 text-sm font-semibold"
                        style={{ color: item.color === 'brand' ? '#a78bfa' : item.color === 'indigo' ? '#818cf8' : item.color === 'blue' ? '#60a5fa' : '#38bdf8' }}
                      >
                        {item.subtitle}
                      </p>
                    )}
                    <p
                      className="mt-3 inline-flex rounded-lg border px-3 py-1.5 text-sm font-bold text-white"
                      style={{
                        borderColor: `rgba(139,92,246,0.2)`,
                        backgroundColor: `rgba(139,92,246,0.1)`,
                      }}
                    >
                      {item.badge}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                      {item.note}
                      <strong className="text-zinc-300">{item.highlight}</strong>.
                    </p>
                  </div>
                </div>

                {/* Period badge (desktop) for left-aligned items */}
                {!isRight ? (
                  <div className="hidden md:block md:order-2">
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-bold`}
                      style={{
                        backgroundColor: `rgba(139,92,246,0.1)`,
                        borderColor: `rgba(139,92,246,0.2)`,
                        border: '1px solid',
                        color: item.color === 'brand' ? '#a78bfa' : item.color === 'indigo' ? '#818cf8' : item.color === 'blue' ? '#60a5fa' : '#38bdf8',
                      }}
                    >
                      {item.period}
                    </span>
                  </div>
                ) : null}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

