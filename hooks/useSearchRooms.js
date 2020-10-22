import { useEffect, useState } from 'react'

import { searchRoomsByName } from 'services/chat'

function useSearchRooms (name) {
  const [rooms, setRooms] = useState([])
  const [loading, setLoading] = useState(false)
  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    setLoading(true)
    const interval = setTimeout(() => {
      searchRoomsByName(name).then((rooms) => {
        if (mounted) {
          setRooms(rooms)
          setLoading(false)
        }
      })
    }, [2000])

    return () => {
      setMounted(false)
      setLoading(false)
      clearInterval(interval)
    }
  }, [])
  return { rooms, loading }
}
export default useSearchRooms
