import UserRoom from 'components/UserRoom'
import { useState, useEffect } from 'react'

import useUser from 'hooks/useUser'
import { getUserRooms } from 'services/user'

function UserRoomsList ({ changeAside }) {
  const user = useUser()
  const [rooms, setRooms] = useState([])

  useEffect(() => {
    try {
      const unsuscribe = user ? getUserRooms(user.id, setRooms) : () => {}
      return () => unsuscribe()
    } catch {}
  }, [user])

  return (
    <div className="Aside-List">
      <h4>MY ROOMS</h4>
      <div className="Aside-List-List">
        {rooms.map((room) => (
          <UserRoom changeAside={changeAside} key={room.id} room={room} />
        ))}
      </div>
    </div>
  )
}

export default UserRoomsList
