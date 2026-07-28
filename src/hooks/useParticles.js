import { useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'

export default function useParticles(canvasRef) {
  const { isLight } = useTheme()
  const particlesRef = useRef([])
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const animationIdRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let particles = particlesRef.current
    let mouse = mouseRef.current

    function resizeCanvas() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    function createParticles(count) {
      particles = []
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 1.8 + 0.8,
          alpha: Math.random() * 0.4 + 0.15,
        })
      }
      particlesRef.current = particles
    }

    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const baseColor = isLight ? '0, 0, 0' : '255, 255, 255'
      const lineColor = isLight ? '0, 0, 0' : '139, 92, 246'

      particles.forEach((p) => {
        const dx = mouse.x - p.x
        const dy = mouse.y - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 150) {
          p.vx -= dx * 0.0002
          p.vy -= dy * 0.0002
        }

        p.x += p.vx
        p.y += p.vy
        p.vx *= 0.99
        p.vy *= 0.99

        if (p.x < -10) p.x = canvas.width + 10
        if (p.x > canvas.width + 10) p.x = -10
        if (p.y < -10) p.y = canvas.height + 10
        if (p.y > canvas.height + 10) p.y = -10

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${baseColor}, ${p.alpha})`
        ctx.fill()
      })

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = dx * dx + dy * dy
          if (dist < 120 * 120) {
            const opacity = (1 - dist / (120 * 120)) * 0.12
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(${lineColor}, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      animationIdRef.current = requestAnimationFrame(drawParticles)
    }

    function onMouseMove(e) {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    resizeCanvas()
    const count = Math.min(80, Math.floor(canvas.width * canvas.height / 15000))
    createParticles(count)
    drawParticles()

    document.addEventListener('mousemove', onMouseMove)
    window.addEventListener('resize', () => {
      resizeCanvas()
      createParticles(Math.min(80, Math.floor(canvas.width * canvas.height / 15000)))
    })

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
    }
  }, [canvasRef, isLight])
}

