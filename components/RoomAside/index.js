import { useEffect, useState } from 'react'

import { getRoom } from 'services/chat'
import RoomUsersList from 'components/RoomUsersList'

function RoomAside ({ roomId }) {
  const [room, setRoom] = useState({})

  useEffect(() => {
    getRoom(roomId).then(setRoom)
  }, [])

  return <div className="container">
    <div className="return-button">
      <button></button> All Rooms
    </div>
    <div>
      <h4>{room.name}</h4>
      <p>{room.description}</p>
    </div>
    <RoomUsersList roomId={roomId}/>

    <style jsx>{`
        .return-button{
            top:0;
            left:0;
            width:100%;
            height:50px;
            z-index:3000;
            display:flex;
            font-weight:500;
            padding: 0 0.6rem;
            position:absolute;
            align-items:center;
            box-shadow:  -1px 2px 3px 0px  rgba(0,0,0,0.55);
        }

        .return-button button{
            color:#fff;
            width:30px;
            height:25px;
            border:none;
            cursor:pointer;
            position:relative;
            margin-right:0.5rem;
            background:transparent;
        }
        .return-button button:after{
            top:0;
            left:0;
            right:0;
            bottom:0;
            margin:auto;
            content:'${'\\003C'}';
            font-size:1.5rem;
            position:absolute;
            font-weight:bold;
        }

        .container{
            height:100%;
            padding-top:50px;
        }
        `}</style>

  </div>
}

export default RoomAside
