import { useEffect } from 'react'
import { useRouter } from 'next/router'

import useUser from 'hooks/useUser'
import Loader from 'components/Loader'

// eslint-disable-next-line react/display-name
const isAuthenticated = (Page) => () => {
  const user = useUser()
  const router = useRouter()

  useEffect(() => {
    user === null && router.push('/login')
  }, [user])

  return <>
    {user ? <Page user={user}/>
      : <div>
        <Loader/>
      </div>}
    <style jsx>{`
          div{
            height:100vh;
            display:flex;
            align-items:center;
            justify-content:center;
          }
        `}</style>
  </>
}

export default isAuthenticated
