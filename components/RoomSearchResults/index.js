import Loader from 'components/Loader'
import UserRoom from 'components/UserRoom'
import useSearchRooms from 'hooks/useSearchRooms'

function RoomSearchResults ({ value, changeAside }) {
  const { rooms, loading, error } = useSearchRooms(value)

  if (error) return <span>Something is wrong, please try again</span>

  return (
    <div className="Aside-List">
      <h4>RESULTS</h4>
      {loading ? (
        <div className="loader">
          <Loader />
        </div>
      ) : (
        <div className="Aside-List-List">
          {rooms.length ? (
            rooms.map((room) => <UserRoom key={room.id} room={room} changeAside={changeAside} />)
          ) : (
            <div>There&apos;s no rooms with that name</div>
          )}
        </div>
      )}
      <style jsx>{`
        .loader {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </div>
  )
}

export default RoomSearchResults
