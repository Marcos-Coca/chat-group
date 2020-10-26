import { useEffect, useState } from 'react'

import { searchRoomsByName } from 'services/chat'

function useSearchRooms (name) {
  const [rooms, setRooms] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const interval = setTimeout(() => {
      searchRoomsByName(name).then((rooms) => {
        setRooms(rooms)
        setLoading(false)
      }).catch(() => setError(true))
    }, [2000])

    return () => {
      clearInterval(interval)
    }
  }, [name])
  return { rooms, loading, error }
}
export default useSearchRooms
