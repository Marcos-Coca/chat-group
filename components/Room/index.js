
import { useState, useEffect } from 'react'

import Send from 'components/Icons/Send'
import Message from 'components/Message'
import belongsRoom from 'hoc/belongsRoom'
import useMessages from 'hooks/useMessages'
import { sendMessage } from 'services/chat'
import useNearScreen from 'hooks/useNearScreen'

import styles from './styles'

function Room ({ room, user }) {
  const { messages } = useMessages(room.id)
  const [message, setMessage] = useState('')
  const [showMessageEnd, messagesEndRef] = useNearScreen({})

  function handleSubmit (e) {
    e.preventDefault()
    sendMessage({ roomId: room.id, message, user }).then(() => setMessage(''))
  }
  function handleChange (e) {
    const value = e.target.value
    setMessage(value)
  }

  useEffect(() => {
    showMessageEnd && messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <div className="chat-room">
      <div className="chat-room-top">{room.name}</div>
      <div className="chat">
        <div>

          {messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
          <div ref={messagesEndRef}></div>
        </div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={message} onChange={handleChange} placeholder="Type a message here" />
          <button type="submit">
            <Send fill="var(--main-color)" />
          </button>
        </form>
      </div>
      <style jsx>{styles}</style>
    </div>
  )
}

export default belongsRoom(Room)
