import { useEffect } from 'react'
import { throttle } from 'lodash'

export const useScroll = (fn: () => void) => {
  const handleScroll = throttle(fn, 250)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () =>
      window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])
}
