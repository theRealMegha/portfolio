import { useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'

export default function useCursorGlow(glowRef) {
  const { isLight } = useTheme()

  useEffect(() => {
    const glow = glowRef.current
    if (!glow) return

    function updateGlow(e) {
      const opacity = isLight ? '0.04' : '0.07'
      const x = e.clientX
      const y = e.clientY
      glow.style.background = `radial-gradient(600px at ${x}px ${y}px, rgba(139, 92, 246, ${opacity}) 0%, rgba(99, 102, 241, 0) 70%)`
    }

    document.addEventListener('mousemove', updateGlow)
    return () => document.removeEventListener('mousemove', updateGlow)
  }, [glowRef, isLight])
}

