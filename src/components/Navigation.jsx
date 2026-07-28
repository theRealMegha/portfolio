import { useState, useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'
import useActiveSection from '../hooks/useActiveSection'

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

const SECTION_IDS = NAV_ITEMS.map(item => item.id)

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [showNav, setShowNav] = useState(true)
  const { isLight, toggleTheme } = useTheme()
  const activeId = useActiveSection(SECTION_IDS)
  const menuRef = useRef(null)
  const btnRef = useRef(null)
  const headerRef = useRef(null)
  const isHoveredRef = useRef(false)
  const inHeroRef = useRef(true)

  const mobileOpenRef = useRef(false)
  const hideTimeoutRef = useRef(null)

  const scheduleHideFn = useRef(() => {
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current)
    hideTimeoutRef.current = setTimeout(() => {
      if (!isHoveredRef.current && !mobileOpenRef.current && !inHeroRef.current) {
        setShowNav(false)
      }
    }, 2500)
  })

  // Keep navbar always visible while hero section is in view
  useEffect(() => {
    const heroEl = document.getElementById('profile')
    if (!heroEl) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        inHeroRef.current = entry.isIntersecting
        if (entry.isIntersecting) {
          setShowNav(true)
          if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(heroEl)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    function handleScroll() {
      setShowNav(true)
      scheduleHideFn.current()
    }

    function handleMouseEnter() {
      isHoveredRef.current = true
      setShowNav(true)
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current)
    }

    function handleMouseLeave() {
      isHoveredRef.current = false
      scheduleHideFn.current()
    }

    const headerEl = headerRef.current
    window.addEventListener('scroll', handleScroll, { passive: true })
    if (headerEl) {
      headerEl.addEventListener('mouseenter', handleMouseEnter)
      headerEl.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (headerEl) {
        headerEl.removeEventListener('mouseenter', handleMouseEnter)
        headerEl.removeEventListener('mouseleave', handleMouseLeave)
      }
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current)
    }
  }, [])

  // When mobile menu closes, start the hide countdown
  useEffect(() => {
    mobileOpenRef.current = mobileOpen
    if (!mobileOpen) {
      scheduleHideFn.current()
    } else {
      // Menu just opened — cancel any pending hide
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current)
    }
  }, [mobileOpen])

  useEffect(() => {
    function handleClickOutside(e) {
      if (mobileOpen && menuRef.current && !menuRef.current.contains(e.target) && btnRef.current && !btnRef.current.contains(e.target)) {
        setMobileOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [mobileOpen])

  useEffect(() => {
    setMobileOpen(false)
  }, [activeId])

  return (
    <header ref={headerRef} className={'fixed z-50 w-full left-0 px-4 pt-3 transition-all duration-300 ' + (showNav ? 'top-0' : '-top-24')}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between rounded-2xl border border-white/10 bg-zinc-950/80 shadow-xl shadow-zinc-950/10 backdrop-blur-xl">
        <a href="#profile" className="text-xl font-extrabold tracking-tight text-white flex items-center gap-2 select-none hover:opacity-90 transition">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-500 to-indigo-500 flex items-center justify-center text-sm font-black text-white">M</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-indigo-400 to-blue-400">Megha.dev</span>
        </a>
        <nav className="hidden md:flex items-center gap-3">
          <ul className="flex items-center gap-1 rounded-xl border border-zinc-800 bg-zinc-900/60 p-1 text-sm font-medium text-zinc-400">
            {NAV_ITEMS.map(item => (
              <li key={item.id}>
                <a href={'#' + item.id} className={'block rounded-lg px-3 py-2 hover:bg-zinc-800 hover:text-zinc-100 transition-colors' + (activeId === item.id ? ' text-brand-400' : '')}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <button onClick={toggleTheme} type="button" className="w-10 h-10 rounded-xl border border-zinc-800 bg-zinc-900/80 text-zinc-300 hover:text-brand-400 hover:border-brand-500/40 hover:rotate-12 transition flex items-center justify-center" aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}>
            <i className={'fa-solid ' + (isLight ? 'fa-moon' : 'fa-sun')} />
          </button>
        </nav>
        <div className="md:hidden flex items-center gap-2">
          <button onClick={toggleTheme} type="button" className="w-10 h-10 rounded-xl border border-zinc-800 bg-zinc-900/80 text-zinc-300 hover:text-brand-400 hover:border-brand-500/40 hover:rotate-12 transition flex items-center justify-center" aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}>
            <i className={'fa-solid ' + (isLight ? 'fa-moon' : 'fa-sun')} />
          </button>
          <button ref={btnRef} onClick={() => setMobileOpen(prev => !prev)} type="button" className="w-10 h-10 rounded-xl border border-zinc-800 bg-zinc-900/80 text-zinc-300 hover:text-white hover:border-brand-500/40 focus:outline-none transition flex items-center justify-center" aria-label="Toggle menu">
            {mobileOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" /></svg>
            )}
          </button>
        </div>
      </div>
      <div ref={menuRef} className={(mobileOpen ? '' : 'hidden ') + 'md:hidden absolute top-[76px] left-4 right-4 rounded-2xl border border-white/10 bg-zinc-950/95 p-3 backdrop-blur-xl shadow-2xl shadow-zinc-950/30'}>
        <nav className="flex flex-col gap-1">
          {NAV_ITEMS.map(item => (
            <a key={item.id} href={'#' + item.id} onClick={() => setMobileOpen(false)} className={'rounded-xl px-4 py-3 transition-colors' + (activeId === item.id ? ' text-brand-400 bg-zinc-900' : ' text-zinc-300 hover:bg-zinc-900 hover:text-white')}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}