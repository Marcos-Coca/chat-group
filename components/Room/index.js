import { useState } from 'react'

import Message from 'components/Message'
import useMessages from 'hooks/useMessages'
import { sendMessage } from 'services/chat'

function Room ({ roomId, user }) {
  const { messages } = useMessages(roomId)
  const [message, setMessage] = useState('')

  function handleSubmit (e) {
    e.preventDefault()
    sendMessage({ roomId, message, user }).then(() => setMessage(''))
  }
  function handleChange (e) {
    const value = e.target.value
    setMessage(value)
  }

  return (
    <div>
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
      <form onSubmit={handleSubmit}>
        <input type="text" value={message} onChange={handleChange} placeholder="sendMessage" />
        <input type="submit" />
      </form>
    </div>
  )
}

export default Room
