import { useEffect, useState } from 'react'

import { searchRoomsByName } from 'services/chat'

function useSearchRooms (name) {
  const [rooms, setRooms] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const interval = setTimeout(() => {
      searchRoomsByName(name).then((rooms) => {
        setRooms(rooms)
        setLoading(false)
      })
    }, [2000])

    return () => {
      clearInterval(interval)
    }
  }, [name])
  return { rooms, loading }
}
export default useSearchRooms
