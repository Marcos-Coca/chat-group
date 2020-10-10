import { useEffect } from 'react'
import { useRouter } from 'next/router'

import Layout from 'components/Layout'
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
        <Layout>
          <Page user={user} {...props} />
        </Layout>
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
