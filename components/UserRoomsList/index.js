import UserRoom from 'components/UserRoom'
import { useState, useEffect } from 'react'

import useUser from 'hooks/useUser'
import { getUserRooms } from 'services/user'

function UserRoomsList ({ changeAside }) {
  const user = useUser()
  const [rooms, setRooms] = useState([])

  useEffect(() => {
    if (user) {
      const unsuscribe = getUserRooms(user.id, setRooms)

      return () => unsuscribe()
    }
  }, [user])

  return (
    <div className="Aside-List">
      <div className="Aside-List-List">
        {rooms.map((room) => (
          <UserRoom changeAside={changeAside} key={room.id} room={room} />
        ))}
      </div>
      <style jsx>{`
        .Aside-List {
          margin-top: 1rem;
        }
      `}</style>
    </div>
  )
}

export default UserRoomsList
