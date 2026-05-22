import { useEffect, useRef, useState } from 'react'

export function useScrollProgress() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    let sectionHeight = section.offsetHeight

    const handleScroll = () => {
      if (!sectionHeight) return
      const progress = Math.min(1, Math.max(0, window.scrollY / sectionHeight))
      setScrollProgress(progress)
    }

    const resizeObserver = new ResizeObserver(() => {
      sectionHeight = section.offsetHeight
      handleScroll()
    })

    resizeObserver.observe(section)
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      resizeObserver.disconnect()
    }
  }, [])

  return { sectionRef, scrollProgress }
}
