import { useEffect } from 'react'
import { useRouter } from 'next/router'

import Aside from 'components/Aside'
import useUser from 'hooks/useUser'
import Loader from 'components/Loader'

const isAuthenticated = (Page) => (props) => {
  const user = useUser()
  const router = useRouter()

  useEffect(() => {
    user === null && router.replace('/login')
  }, [user])

  return (
    <>
      {user ? (
        <>
          <Aside/>
          <Page user={user} {...props} />
        </>
      ) : (
        <div>
          <Loader />
        </div>
      )}
      <style jsx>{`
        div {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </>
  )
}

export default isAuthenticated
