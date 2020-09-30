import { useEffect } from 'react'
import { useRouter } from 'next/router'

import useUser from 'hooks/useUser'

function useRedirectOnAuth () {
  const user = useUser()
  const router = useRouter()

  useEffect(() => {
    user && router.replace('/')
  }, [user])

  return user
}
export default useRedirectOnAuth
