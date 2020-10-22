
import belongsRoom from 'hoc/belongsRoom'
import ChatInput from 'components/ChatInput'
import MessagesList from 'components/MessagesList'

import styles from './styles'

function Room ({ room, user }) {
  return (
    <div className="chat-room">
      <div className="chat-room-top">{room.name}</div>
      <div className="chat">
        <MessagesList roomId={room.id}/>
        <ChatInput user={user} roomId={room.id}/>
      </div>
      <style jsx>{styles}</style>
    </div>
  )
}

export default belongsRoom(Room)
