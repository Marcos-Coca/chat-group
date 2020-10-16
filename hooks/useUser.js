import { useState, useEffect } from 'react'

import { onAuthStateChanged } from 'services/auth'

function useUser () {
  const [user, setUser] = useState()

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(setUser)

    return () => unsubcribe()
  }, [])

  return user
}
export default useUser
