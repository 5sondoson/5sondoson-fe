import { useEffect, useRef, useState } from 'react'

export function useHeaderVisibility() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const isNearTop = currentScrollY < 80
      const isScrollingUp = currentScrollY < lastScrollY.current

      setIsHeaderVisible(isNearTop || isScrollingUp)

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return isHeaderVisible
}
