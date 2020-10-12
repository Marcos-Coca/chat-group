import { useState } from 'react'

import Send from 'components/Icons/Send'
import Message from 'components/Message'
import belongsRoom from 'hoc/belongsRoom'
import useMessages from 'hooks/useMessages'
import { sendMessage } from 'services/chat'

function Room ({ room, user }) {
  const { messages } = useMessages(room.id)
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
        <div>
          {messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={message} onChange={handleChange} placeholder="Type a message here" />
          <button type="submit">
            <Send fill="var(--main-color)" />
          </button>
        </form>
      </div>

      <style jsx>{`
        .chat-room {
          width: 100%;
          position: relative;
        }
        .chat-room-top {
          top: 0;
          left: 0;
          width: 100%;
          height: 50px;
          z-index: 3000;
          display: flex;
          padding-left:10%;
          font-weight: 500;
          position: absolute;
          align-items: center;
          background: var(--second-color);
          box-shadow: -1px 2px 3px 0px rgba(0, 0, 0, 0.55);
        }
        form {
          top: 90vh;
          width: 100%;
          height: 50px;
          display: flex;
          overflow: hidden;
          position: absolute;
          align-items: center;
          padding-right: 10px;
          border-radius: 10px;
          background: var(--third-color);
        }
        form input[type='text'] {
          width: 100%;
          border: none;
          padding: 1rem;
          outline: none;
          font-size: 1.25rem;
          background: transparent;
          color: var(--font-main-color);
        }
        form input[type='text']::placeholder {
          color: var(--font-second-color);
        }
        form button {
          width: 40px;
          height: 40px;
          border: none;
          outline: none;
          cursor: pointer;
          border-radius: 5px;
          background: transparent;
          background: var(--font-main-color);
        }
        .chat {
          width: 85%;
          margin: auto;
          height: 100vh;
          position: relative;
        }
      `}</style>
    </div>
  )
}

export default belongsRoom(Room)
