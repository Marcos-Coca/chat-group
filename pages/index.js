
import isAuthenticated from 'hoc/isAuthenticated'

function Home ({ statusCode = 200 }) {
  return <div>
  </div>
}

export default isAuthenticated(Home)
