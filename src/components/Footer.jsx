export default function Footer() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-6">
        <hr className="border-zinc-900" />
      </div>
      <footer className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-zinc-500 select-none">
        <nav>
          <ul className="flex flex-wrap items-center justify-center gap-8 text-zinc-400 font-medium">
            {['about', 'education', 'skills', 'projects', 'contact'].map((item) => (
              <li key={item}>
                <a href={`#${item}`} className="hover:text-zinc-200 transition capitalize">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-center md:text-right">Copyright &#169; 2026 Megha Murukesh. All Rights Reserved.</p>
      </footer>
    </>
  )
}

