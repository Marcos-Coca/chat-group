function RoomUser ({ user }) {
  return (
    <li className="User">
      <div className="User-Avatar-Container">
        <img src={user.avatar} />
      </div>
      <span className="User-Name">{user.userName}</span>
      <style jsx>{`
          .User-Name{
            font-size:1.25rem;
            overflow:hidden;
            text-overflow:ellipsis;
            width:calc(100% - 50px - 1rem);
          }
        
        `}</style>
    </li>
  )
}

export default RoomUser
