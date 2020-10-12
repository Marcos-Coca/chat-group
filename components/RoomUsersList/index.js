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
    <div className="Aside-List" >
      <h4 className="Aside-List-Title">Members</h4>
      <ul className="Aside-List-List">
        {users.map((user) => (
          <RoomUser key={user.id} user={user} />
        ))}
      </ul>
    </div>
  )
}
export default RoomUsersList
