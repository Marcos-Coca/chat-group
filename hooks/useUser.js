import { useState, useEffect } from 'react'

import { onAuthStateChanged } from 'services/firebase/client'

function useUser () {
  const [user, setUser] = useState()

  useEffect(() => {
    onAuthStateChanged(setUser)
  }, [])

  return user
}
export default useUser
