import { useEffect, useState } from 'react'

import Loader from 'components/Loader'
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

  return <>
    { belongs === undefined
      ? <Loader/>
      : belongs
        ? <Room roomId={roomId} user={user} />
        : <div>
          <h3>You don&apos;t belong to this room</h3>
        </div>

    }
  </>
}

export default belongsRoom
