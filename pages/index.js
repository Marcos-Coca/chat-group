import isAuthenticated from 'hoc/isAuthenticated'

function Home ({ user }) {
  return <div>
    Esta es la home
  </div>
}

export default isAuthenticated(Home)
