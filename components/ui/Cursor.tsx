'use client'
import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mx = 0, my = 0
    let rx = 0, ry = 0
    let animId: number

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      if (dotRef.current) {
        dotRef.current.style.left = mx - 6 + 'px'
        dotRef.current.style.top  = my - 6 + 'px'
      }
    }

    const animate = () => {
      rx += (mx - rx - 18) * 0.12
      ry += (my - ry - 18) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = rx + 'px'
        ringRef.current.style.top  = ry + 'px'
      }
      animId = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    animate()

    const interactEls = document.querySelectorAll('button, a, [data-cursor]')
    const grow   = () => { if (dotRef.current) dotRef.current.style.transform = 'scale(2.5)' }
    const shrink = () => { if (dotRef.current) dotRef.current.style.transform = 'scale(1)' }

    interactEls.forEach(el => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
