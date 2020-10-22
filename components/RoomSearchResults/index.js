import Loader from 'components/Loader'
import UserRoom from 'components/UserRoom'
import useSearchRooms from 'hooks/useSearchRooms'

function RoomSearchResults ({ value }) {
  const { rooms, loading } = useSearchRooms(value)

  console.log(rooms)
  return loading ? (
    <Loader />
  ) : (
    <div>
      {rooms.map((room) => <UserRoom key={room.id} room={room} changeAside={() => {}} />)}
    </div>
  )
}

export default RoomSearchResults
