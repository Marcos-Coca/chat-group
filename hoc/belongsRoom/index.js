import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import Loader from 'components/Loader'
import { addUserToRoom } from 'services/user'
import { DEFAULT_ROOM } from 'utils/constants/room'
import { getRoom, isUserInRoom } from 'services/chat'

import styles from './styles'

const belongsRoom = (Room) => ({ user, roomId }) => {
  const router = useRouter()
  const [room, setRoom] = useState({})
  const [belongs, setBelongs] = useState()

  useEffect(() => {
    getRoom(roomId)
      .then(setRoom)
      .then(() => {
        roomId === DEFAULT_ROOM ? setBelongs(true) : isUserInRoom({ userId: user.id, roomId }).then(setBelongs)
      })
  }, [roomId])

  const handleCancelClick = () => router.push('/')

  const handleJoinClick = () => {
    setBelongs()
    addUserToRoom({ user, roomId }).then(() => {
      setBelongs(true)
    })
  }

  return (
    <>
      {belongs === undefined ? (
        <Loader />
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
