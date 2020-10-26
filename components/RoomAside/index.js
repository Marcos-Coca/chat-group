
import RoomUsersList from 'components/RoomUsersList'

import styles from './styles'

function RoomAside ({ room, changeAside }) {
  return (
    <div className="Aside-Content-Container">
      <div className="Aside-Top">
        <button onClick={changeAside} ></button> All Rooms
      </div>
      <div className="Aside-Description" >
        <h4>{room.name}</h4>
        <p>{room.description}</p>
      </div>
      <RoomUsersList roomId={room.id} />

      <style jsx>{styles}</style>
    </div>
  )
}

export default RoomAside
