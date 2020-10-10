import Room from 'components/Room'
import isAuthenticated from 'hoc/isAuthenticated'

function Rooms ({ roomId, user }) {
  return <Room roomId={roomId} user={user}/>
}

export function getServerSideProps (context) {
  const { id } = context.params
  return {
    props: {
      roomId: id
    }
  }
}

export default isAuthenticated(Rooms)
