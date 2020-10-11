import { useEffect, useState } from 'react'

import { getRoom } from 'services/chat'
import RoomUsersList from 'components/RoomUsersList'

function RoomAside ({ roomId }) {
  const [room, setRoom] = useState({})

  useEffect(() => {
    getRoom(roomId).then(setRoom)
  }, [])

  return <div>
    <div>
      <h4>{room.name}</h4>
      <p>{room.description}</p>
    </div>
    <RoomUsersList roomId={roomId}/>
  </div>
}

export default RoomAside
