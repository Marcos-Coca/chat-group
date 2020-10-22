import Send from 'components/Icons/Send'

import useInput from 'hooks/useInput'
import { sendMessage } from 'services/chat'

import styles from './styles'

function ChatInput ({ user, roomId }) {
  const [message, setMessage] = useInput('')

  function handleSubmit (e) {
    e.preventDefault()
    sendMessage({ roomId, message, user }).then(() => setMessage(null, ''))
  }

  return <form onSubmit={handleSubmit}>
    <input type="text" value={message} onChange={setMessage} placeholder="Type a message here" />
    <button type="submit">
      <Send fill="var(--main-color)" />
    </button>
    <style jsx>{styles}</style>
  </form>
}
export default ChatInput
