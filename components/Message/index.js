import useTimeAgo from 'hooks/useTimeAgo'
function Message ({ message }) {
  const timeAgo = useTimeAgo(message.createdAt)

  console.log(message)
  return <div className="User">
    <div className="User-Avatar-Container">
      <img src={message.user.avatar} alt={message.user.userName}/>
    </div>
    <div>
      <span className="User-Name"> {message.user.userName}</span>
      <span className="TimeAgo">{timeAgo}</span>
      <p>{message.message}</p>
    </div>
    <style jsx>{`
        
          p{
            margin: 10px 0;
            font-size:1.25rem;
          }
          .TimeAgo{
            font-size:0.865rem;
            margin-left:1.25rem;
            color:var(--font-second-color)
          }
        `}</style>
  </div>
}
export default Message
