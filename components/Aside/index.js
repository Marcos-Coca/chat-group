import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { getRoom } from 'services/chat'

function Aside ({ children }) {
  const router = useRouter()
  const [room, setRoom] = useState()

  useEffect(() => {
    const roomId = router.query.id
    getRoom(roomId).then((room) => {
      setRoom(room)
    })
  }, [])

  return <div>
    {room &&
    <div>
      <h3>{room.name}</h3>
      <p>{room.description}</p>

      {
        room.users.map(user => <ul key={user.id}>
          <img src={user.avatar}/>
          <span>{user.userName}</span>
        </ul>)
      }

    </div>
    }
    {children}

    <style jsx>{`
        img{
            height:50px;
            width:50px;
        }

        `}</style>
  </div>
}

export default Aside
