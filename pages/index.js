
import { useEffect, useState } from 'react'

import { sendMessage, getMessages } from 'services/chat'
import isAuthenticated from 'hoc/isAuthenticated'

function Home ({ user }) {
  const [message, setMessage] = useState('')
  useEffect(() => {
    console.log(user)
    getMessages('rRejkdgXIWUCxz3SqYH3')
  }, [])

  function handleSubmit (e) {
    e.preventDefault()
    sendMessage('rRejkdgXIWUCxz3SqYH3', message, user)
  }
  function handleChange (e) {
    const value = e.target.value
    setMessage(value)
  }
  return <div>
    Esta es la home
    <form onSubmit={handleSubmit}>
      <input type="text" value={message} onChange={handleChange} placeholder="sendMessage" />
      <input type="submit" />
    </form>
  </div>
}

export default isAuthenticated(Home)
