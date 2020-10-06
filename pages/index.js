
import Room from 'components/Room'
import isAuthenticated from 'hoc/isAuthenticated'

function Home ({ user }) {
  return <div>
    <h1>Esta es la home</h1>
    <Room roomId="rRejkdgXIWUCxz3SqYH3" user={user}/>
  </div>
}

export default isAuthenticated(Home)
