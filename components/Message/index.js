import { memo } from 'react'
import useTimeAgo from 'hooks/useTimeAgo'

import styles from './styles'

function Message({ message }) {
  const timeAgo = useTimeAgo(message.createdAt)

  return (
    <div className="User">
      <div className="User-Avatar-Container">
        <img src={message.user.avatar} alt={message.user.userName} />
      </div>
      <div>
        <span className="User-Name"> {message.user.userName}</span>
        <span className="TimeAgo">{timeAgo}</span>
        <p>{message.message}</p>
      </div>
      <style jsx>{styles}</style>
    </div>
  )
}
export default memo(Message, (prevProps, nextProps) => {
  return prevProps.message.id === nextProps.message.id
})
