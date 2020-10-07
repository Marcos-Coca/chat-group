import { useEffect, useState } from 'react'
import { getUserRooms } from 'services/chat'

// eslint-disable-next-line react/display-name
const belongsRoom = (Room) => ({ user, roomId }) => {
  const [belongs, setBelongs] = useState()

  useEffect(() => {
    getUserRooms(user.id).then((rooms) => {
      const isRoom = rooms.includes(roomId)
      setBelongs(isRoom)
    })
  }, [])

  return <Room roomId={roomId} user={user} />
}

export default belongsRoom
