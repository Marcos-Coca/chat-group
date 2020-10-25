function RoomUser ({ user }) {
  return (
    <li className="User">
      <div className="User-Avatar-Container">
        <img src={user.avatar} />
      </div>
      <span className="User-Name">{user.userName}</span>
    </li>
  )
}

export default RoomUser
