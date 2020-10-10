import { useState, useEffect } from 'react'

import { getUser } from 'services/user'
import { onAuthStateChanged } from 'services/auth'

function useUser () {
  const [user, setUser] = useState()
  const [auth, setAuth] = useState()

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(setAuth)

    return () => unsubcribe()
  }, [])

  useEffect(() => {
    auth ? getUser(auth.uid).then((user) => setUser(user)) : setUser(auth)
  }, [auth])

  return user
}
export default useUser
