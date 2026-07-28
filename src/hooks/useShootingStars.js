import { useEffect, useRef } from 'react'

export default function useShootingStars(containerRef) {
  const timeoutRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    function createStar() {
      const star = document.createElement('div')
      star.className = 'shooting-star'
      const startX = Math.random() * window.innerWidth * 0.8 + window.innerWidth * 0.2
      const startY = Math.random() * window.innerHeight * 0.3
      const duration = Math.random() * 1.5 + 1
      const delay = Math.random() * 0.5

      star.style.left = startX + 'px'
      star.style.top = startY + 'px'
      star.style.animationDuration = duration + 's'
      star.style.animationDelay = delay + 's'
      star.style.opacity = '0'

      container.appendChild(star)

      setTimeout(() => {
        if (star.parentNode) star.remove()
      }, (duration + delay) * 1000 + 200)
    }

    function scheduleNext() {
      const delay = Math.random() * 8000 + 3000
      timeoutRef.current = setTimeout(() => {
        createStar()
        scheduleNext()
      }, delay)
    }

    const initialTimeout = setTimeout(() => {
      for (let i = 0; i < 2; i++) {
        setTimeout(createStar, i * 1000)
      }
      scheduleNext()
    }, 2000)

    return () => {
      clearTimeout(initialTimeout)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [containerRef])
}

