import { useEffect, useState, useRef } from 'react'

function useNearScreen({ distance = '200px' } = {}) {
  const element = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const { isIntersecting } = entries[0]

        if (isIntersecting) {
          setShow(true)
        } else {
          setShow(false)
        }
      },
      { rootMargin: distance }
    )
    element.current && observer.observe(element.current)
    return () => observer && observer.disconnect()
  }, [element.current])

  return [show, element]
}

export default useNearScreen
