import { useState, useEffect } from 'react'

import useUser from 'hooks/useUser'
import { getUserRooms } from 'services/user'

function getRoomLogo (name) {
  const spaceIndex = name.indexOf(' ') + 1

  if (spaceIndex) {
    return `${name[0]}${name[spaceIndex]}`
  }
  return name[0]
}

function UserRoomsList () {
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
          <div className="Room" key={room.id}>
            <div>
              <div className="Room-Logo">{getRoomLogo(room.name)}</div>
              <span className="Room-Name">{room.name}</span>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .Aside-List{
            margin-top:1rem;
        }
        .Room-Logo {
          width: 40px;
          height: 40px;
          font-weight: 500;
          line-height: 40px;
          margin-right: 1rem;
          font-size: 1.25rem;
          text-align: center;
          border-radius: 10px;
          display: inline-block;
          background: var(--second-color);
        }
        .Room-Name {
          font-size: 1.25rem;
          overflow: hidden;
          text-overflow: ellipsis;
          width: calc(100% - 40px - 1rem);
        }
      `}</style>
    </div>
  )
}

export default UserRoomsList
