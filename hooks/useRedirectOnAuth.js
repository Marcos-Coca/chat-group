import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { DEFAULT_ROOM } from 'utils/constants/room'
import useUser from 'hooks/useUser'

function useRedirectOnAuth() {
  const user = useUser()
  const router = useRouter()

  useEffect(() => {
    console.log(user)
    user && router.replace(`/rooms/${DEFAULT_ROOM}`)
  }, [user])

  return user
}
export default useRedirectOnAuth
