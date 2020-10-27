import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import Loader from 'components/Loader'
import { addUserToRoom } from 'services/user'
import { DEFAULT_ROOM } from 'utils/constants/room'
import { isUserInRoom } from 'services/chat'

import styles from './styles'

const belongsRoom = (Room) => ({ user, room }) => {
  const router = useRouter()
  const [belongs, setBelongs] = useState()

  useEffect(() => {
    room.id === DEFAULT_ROOM ? setBelongs(true) : isUserInRoom({ userId: user.id, roomId: room.id }).then(setBelongs)
  }, [room.id])

  const handleCancelClick = () => router.push('/')

  const handleJoinClick = () => {
    setBelongs()
    addUserToRoom({ user, roomId: room.id }).then(() => {
      setBelongs(true)
    })
  }

  return (
    <>
      {belongs === undefined ? (
        <div className="loader">
          <Loader />
        </div>
      ) : belongs ? (
        <Room room={room} user={user} />
      ) : (
        <div className="NotBelongs-Container">
          <div>
            <h3>
              You don&apos;t belong to room <br /> <b>{room.name}</b>
            </h3>
            <span>Do you want to join?</span>
            <div className="buttons">
              <button onClick={handleCancelClick}>Cancel</button>
              <button onClick={handleJoinClick}>Join</button>
            </div>
          </div>
        </div>
      )}
      <style jsx>{styles}</style>
    </>
  )
}

export default belongsRoom
