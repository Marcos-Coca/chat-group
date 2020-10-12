import { useEffect, useState } from 'react'

import { getRoom } from 'services/chat'
import RoomUsersList from 'components/RoomUsersList'

function RoomAside ({ roomId }) {
  const [room, setRoom] = useState({})

  useEffect(() => {
    getRoom(roomId).then(setRoom)
  }, [])

  return (
    <div className="Aside-Content-Container">
      <div className="Aside-Top">
        <button></button> All Rooms
      </div>
      <div className="Aside-Description" >
        <h4>{room.name}</h4>
        <p>{room.description}</p>
      </div>
      <RoomUsersList roomId={roomId} />

      <style jsx>{`
        .Aside-Top button {
          color: #fff;
          width: 30px;
          height: 25px;
          border: none;
          outline: none;
          cursor: pointer;
          position: relative;
          margin-right: 0.5rem;
          background: transparent;
        }
        .Aside-Top button:after {
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          content: '${'\\003C'}';
          font-size: 1.5rem;
          position: absolute;
          font-weight: bold;
        }
        .Aside-Description{
          margin-bottom:2.5rem;
        }
      `}</style>
    </div>
  )
}

export default RoomAside
