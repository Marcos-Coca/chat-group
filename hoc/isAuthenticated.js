import { useRouter } from 'next/router'
import { useEffect } from 'react'

import useUser from 'hooks/useUser'

// eslint-disable-next-line react/display-name
const isAuthenticated = (Page) => () => {
  const user = useUser()
  const router = useRouter()

  useEffect(() => {
    user === null && router.push('/login')
  }, [user])

  return <Page user={user}/>
}

export default isAuthenticated
