import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import Loader from 'components/Loader'
import { getRoom } from 'services/chat'
import { DEFAULT_ROOM } from 'utils/constants/room'

const belongsRoom = (Room) => ({ user, roomId }) => {
  const router = useRouter()
  const [room, setRoom] = useState({})
  const [belongs, setBelongs] = useState()

  useEffect(() => {
    if (roomId !== DEFAULT_ROOM) {
      getRoom(roomId).then((room) => {
        const isInRoom = room.users.find(({ id }) => id === user.id)
        isInRoom ? setBelongs(isInRoom) : setRoom(room)
      })
    } else {
      setBelongs(true)
    }
  }, [])

  const handleCancelClick = () => router.push('/')

  return (
    <>
      {!belongs && !room ? (
        <Loader />
      ) : belongs ? (
        <Room roomId={roomId} user={user} />
      ) : (
        <div className="NotBelongs-Container">
          <div>
            <h3>You don&apos;t belong to room <br/> <b>{room.name}</b></h3>
            <span>Do you want to join?</span>
            <div className="buttons">
              <button onClick={handleCancelClick}>Cancel</button>
              <button>Join</button>
            </div>
          </div>
        </div>
      )}
      <style jsx>
        {`
          h3 {
            font-size: 1.6rem;
            font-weight:normal;
          }
          span {
            font-size: 1.25rem;
          }
          .NotBelongs-Container {
            width: 100%;
            height: 100vh;
            display: flex;
          }
          .NotBelongs-Container > div {
            width: 50%;
            margin: auto;
            max-width:576px;
            border-radius:10px;
            text-align: center;
            background: var(--main-color);
          }

          .buttons > * {
            margin: 1.5rem 10px;
          }

          @media (max-width: 650px) {
            .NotBelongs-Container > div {
              width: 100%;
            }
            .NotBelongs-Container {
              background: var(--main-color);
            }
          }
        `}
      </style>
    </>
  )
}

export default belongsRoom
