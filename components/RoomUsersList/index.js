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
    <div>
      <h4>Members</h4>
      <ul>
        {users.map((user) => (
          <RoomUser key={user.id} user={user} />
        ))}
      </ul>
      <style jsx>{`
          div{
              height:85%;
          }
          h4{
              text-transform:uppercase;
          }
        ul {
          padding: 0;
          height:85%;
          overflow-y: hidden;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}
export default RoomUsersList
