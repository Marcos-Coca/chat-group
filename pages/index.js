
import { useEffect, useState } from 'react'

import useMessages from 'hooks/useMessages'
import { sendMessage } from 'services/chat'
import isAuthenticated from 'hoc/isAuthenticated'

function Home ({ user }) {
  const [message, setMessage] = useState('')
  const { setPage, messages } = useMessages('rRejkdgXIWUCxz3SqYH3')
  useEffect(() => {
    // messages.map((doc) => console.log(doc))
  }, [messages])

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
    <button onClick={() => setPage(prevPage => prevPage + 1)}> Next Page</button>
  </div>
}

export default isAuthenticated(Home)
