import { useState } from 'react'
import { useRouter } from 'next/router'

import useUser from 'hooks/useUser'
import { logOut } from 'services/auth'
import { leaveRoom } from 'services/user'
import NavigateDown from 'components/Icons/NavigateDown'

import styles from './styles'

function AsideFooter ({ roomId }) {
  const user = useUser()
  const router = useRouter()
  const [modal, setModal] = useState(false)

  const handleClick = () => setModal((prevModal) => !prevModal)

  const handleLogOut = () => {
    logOut().then(() => router.push('/login'))
  }
  const handleLeaveRoom = () => {
    leaveRoom({ roomId, userId: user.id }).then(() => router.push('/'))
  }
  console.log(user)

  return (
    <div className="Aside-Footer">
      <div>
        <div className="User">
          <div className="User-Avatar-Container">
            <img src={user?.avatar} alt={user?.userName} />
          </div>
          <span className="User-Name"> {user?.userName}</span>
        </div>
        <button onClick={handleClick}>
          <NavigateDown height="26px" width="26px" />
        </button>
        {modal && (
          <div className="User-Menu">
            {roomId && <div onClick={handleLeaveRoom}>Leave</div>}
            <div onClick={handleLogOut} className="User-Menu-Logout">
              Logout
            </div>
          </div>
        )}
      </div>
      <style jsx>{styles}</style>
    </div>
  )
}

export default AsideFooter
