import { useState, useEffect } from 'react'

import { onAuthStateChanged } from 'services/auth'

function useUser() {
  const [user, setUser] = useState()

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(setUser)

    return () => unsuscribe()
  }, [])

  return user
}
export default useUser
