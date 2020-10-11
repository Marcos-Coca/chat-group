import { useEffect, useState } from 'react'

import RoomUser from 'components/RoomUser'
import { getLiveRoomUsers } from 'services/chat'

function RoomUsersLists ({ roomId }) {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const unsuscribe = getLiveRoomUsers(roomId, setUsers)
    return () => unsuscribe()
  }, [])

  return users.map((user) => <RoomUser key={user.id} user={user} />)
}
export default RoomUsersLists
