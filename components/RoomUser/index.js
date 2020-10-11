function RoomUser ({ user }) {
  return (
    <li>
      <div className="avatar-container">
        <img src={user.avatar} />
      </div>
      <span>{user.userName}</span>
      <style jsx>{`
        span {
          font-size: 1.25rem;
          font-weight: 500;
          color: var(--font-second-color);
        }
        li {
          display: flex;
          list-style: none;
          align-items: center;
        }
        .avatar-container {
          height: 50px;
          overflow: hidden;
          margin-right: 1rem;
          border-radius: 5px;
        }

        img {
          height: 100%;
          object-fit: contain;
        }
      `}</style>
    </li>
  )
}

export default RoomUser
