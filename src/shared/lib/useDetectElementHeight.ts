import { useEffect, useRef, useState } from 'react'

export function useDetectElementHeight<T extends HTMLElement>() {
  const targetRef = useRef<T>(null)
  const [detectedHeight, setDetectedHeight] = useState(0)

  useEffect(() => {
    if (!targetRef.current) return
    const observer = new ResizeObserver(([entry]) =>
      setDetectedHeight(entry.contentRect.height),
    )
    observer.observe(targetRef.current)
    return () => observer.disconnect()
  }, [])

  return { targetRef, detectedHeight }
}
