import { useState } from 'react'
import Send from 'components/Icons/Send'
import belongsRoom from 'hoc/belongsRoom'
import { sendMessage } from 'services/chat'

import MessagesList from 'components/MessagesList'

import styles from './styles'

function Room ({ room, user }) {
  const [message, setMessage] = useState('')

  function handleSubmit (e) {
    e.preventDefault()
    sendMessage({ roomId: room.id, message, user }).then(() => setMessage(''))
  }
  function handleChange (e) {
    const value = e.target.value
    setMessage(value)
  }

  return (
    <div className="chat-room">
      <div className="chat-room-top">{room.name}</div>
      <div className="chat">
        <MessagesList roomId={room.id}/>
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
