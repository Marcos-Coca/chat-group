function RoomUser ({ user }) {
  return (
    <li>
      <img src={user.avatar} />
      <span>{user.userName}</span>
      <style jsx>{`
        img {
          height: 50px;
          width: 50px;
        }
      `}</style>
    </li>
  )
}

export default RoomUser
