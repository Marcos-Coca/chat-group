import useTimeAgo from 'hooks/useTimeAgo'
function Message ({ message }) {
  const timeAgo = useTimeAgo(message.createdAt)

  return <div>
    <img src={message.user.avatar} alt={message.user.userName}/>
    <span> <b> {message.user.userName} </b></span>
    <p>{message.message}</p>
    <style jsx>{`

        div{
            padding:1rem;
            margin-bottom:1px solid #fff;
        }

        img{
            width:50px;
            height:50px
        }
        `}</style>
  </div>
}
export default Message
