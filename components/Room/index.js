import { useState, useEffect } from 'react'

import Loader from 'components/Loader'
import Send from 'components/Icons/Send'
import Message from 'components/Message'

import belongsRoom from 'hoc/belongsRoom'
import useMessages from 'hooks/useMessages'
import useNearScreen from 'hooks/useNearScreen'
import { sendMessage } from 'services/chat'

import styles from './styles'

function Room ({ room, user }) {
  const [message, setMessage] = useState('')
  const [showMessageTop, messageTopRef] = useNearScreen({})
  const [showMessageEnd, messagesEndRef] = useNearScreen({})
  const { messages, setPage, loading } = useMessages(room.id)

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

  useEffect(() => {
    showMessageTop && !loading && setPage(prevPage => prevPage + 1)
  }, [showMessageTop])

  return (
    <div className="chat-room">
      <div className="chat-room-top">{room.name}</div>
      <div className="chat">
        <div>
          <div className="messages-top">
            {loading ? (
              <div className="loader">
                <Loader />
              </div>
            ) : (
              <div ref={messageTopRef} />
            )}
          </div>
          {messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
          <div ref={messagesEndRef} />
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
