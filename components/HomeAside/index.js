import RoomSearch from 'components/RoomSearch'
import UserRoomsList from 'components/UserRoomsList'
import CreateRoomButton from 'components/CreateRoomButton'

function HomeAside ({ changeAside }) {
  return (
    <div className="Aside-Content-Container">
      <div className="Aside-Top">
        Rooms
        <CreateRoomButton/>
      </div>
      <RoomSearch/>
      <UserRoomsList changeAside={changeAside}/>

      <style jsx>{`
        .Aside-Top {
          display: flex;
          padding: 0 1rem;
          justify-content: space-between;
        }
      `}</style>
    </div>
  )
}

export default HomeAside
