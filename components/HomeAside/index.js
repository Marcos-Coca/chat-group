import { useState } from 'react'

import RoomSearch from 'components/RoomSearch'
import UserRoomsList from 'components/UserRoomsList'
import CreateRoomButton from 'components/CreateRoomButton'
import RoomSearchResults from 'components/RoomSearchResults'

function HomeAside ({ changeAside }) {
  const [search, setSearch] = useState(false)
  return (
    <div className="Aside-Content-Container">
      <div className="Aside-Top">
        Rooms
        <CreateRoomButton />
      </div>
      <RoomSearch setSearch={setSearch} />
      {search ? (
        <RoomSearchResults value={search} changeAside={changeAside} />
      ) : (
        <UserRoomsList changeAside={changeAside} />
      )}
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
