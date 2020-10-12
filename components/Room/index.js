import { useState } from 'react'

import Message from 'components/Message'
import belongsRoom from 'hoc/belongsRoom'
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
    <div className="chat-room">
      <div className="chat">
        <div>
          {messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={message} onChange={handleChange} placeholder="Type a message here" />
          <input type="submit" />
        </form>
      </div>

      <style jsx>{`

          .chat-room{
            width:100%;
          }
          form{
            top:90vh;
            width:100%;
            height:50px;
            display:flex;
            overflow: hidden;
            position:absolute;
            border-radius: 10px;
          }
          form input[type=text]{
            width:90%;
            border:none;
            padding:1rem;
            font-size:1.25rem;
            color:var(--font-main-color);
            background:var(--third-color);
          }
          form input[type=text]::placeholder{
            color:var(--font-second-color);

          }
          form input[type=submit]{
            width:10%;
            border:none;
          }
        .chat{
          width:85%;
          margin:auto;
          height:100vh;
          position:relative;
        }
        
        `}</style>
    </div>
  )
}

export default belongsRoom(Room)
