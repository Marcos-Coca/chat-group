import { useEffect, useState } from 'react'

import RoomUser from 'components/RoomUser'
import { getLiveRoomUsers } from 'services/chat'

function RoomUsersList ({ roomId }) {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const unsuscribe = getLiveRoomUsers(roomId, setUsers)
    return () => unsuscribe()
  }, [])

  return (
    <ul>
      {users.map((user) => (
        <RoomUser key={user.id} user={user} />
      ))}
    </ul>
  )
}
export default RoomUsersList
