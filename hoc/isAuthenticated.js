import Error from 'next/error'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import Aside from 'components/Aside'
import useUser from 'hooks/useUser'
import Loader from 'components/Loader'

const isAuthenticated = (Page) => (props) => {
  const user = useUser()
  const router = useRouter()

  if (props.statusCode && props.statusCode !== 200) {
    return <Error statusCode={props.statusCode}/>
  }

  useEffect(() => {
    user === null && router.replace('/login')
  }, [user])

  return (
    <>
      {user ? (
        <div className="container">
          <Aside {...props}/>
          <Page user={user} {...props} />
        </div>
      ) : (
        <div className="loader">
          <Loader />
        </div>
      )}
      <style jsx>{`
        .loader {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .container{
          display:flex;
          height:100vh;
        }
      `}</style>
    </>
  )
}

export default isAuthenticated
