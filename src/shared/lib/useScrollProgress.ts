import { useEffect, useRef, useState } from 'react'

export function useScrollProgress() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const sectionHeight = section.offsetHeight
    if (!sectionHeight) return

    const handleScroll = () => {
      const progress = Math.min(1, Math.max(0, window.scrollY / sectionHeight))
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { sectionRef, scrollProgress }
}
