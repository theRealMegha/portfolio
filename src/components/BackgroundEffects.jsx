import { useRef } from 'react'
import useParticles from '../hooks/useParticles'
import useCursorGlow from '../hooks/useCursorGlow'
import useShootingStars from '../hooks/useShootingStars'

export default function BackgroundEffects() {
  const canvasRef = useRef(null)
  const glowRef = useRef(null)
  const starsRef = useRef(null)

  useParticles(canvasRef)
  useCursorGlow(glowRef)
  useShootingStars(starsRef)

  return (
    <>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] glow-spot-1 pointer-events-none z-0" />
      <div className="absolute top-[800px] -left-20 w-[600px] h-[600px] glow-spot-2 pointer-events-none z-0" />
      <div className="absolute bottom-20 -right-20 w-[600px] h-[600px] glow-spot-1 pointer-events-none z-0" />
      <div className="ambient-orb ambient-orb-one pointer-events-none z-0" />
      <div className="ambient-orb ambient-orb-two pointer-events-none z-0" />
      <div className="morphing-blob pointer-events-none z-0" />
      <div ref={starsRef} className="shooting-stars-container pointer-events-none z-0" aria-hidden="true" />
      <div ref={glowRef} id="cursor-glow" className="cursor-glow pointer-events-none z-0" />
      <canvas ref={canvasRef} id="particle-canvas" className="particle-canvas pointer-events-none z-0" aria-hidden="true" />
    </>
  )
}

