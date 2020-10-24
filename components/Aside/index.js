import { useState } from 'react'
import { useRouter } from 'next/router'

import useUser from 'hooks/useUser'
import RoomAside from 'components/RoomAside'
import HomeAside from 'components/HomeAside'

import styles from './styles'

function Aside () {
  const router = useRouter()
  const user = useUser()
  const roomId = router.query.id
  const [aside, setAside] = useState(Boolean(roomId))

  const changeAside = () => {
    setAside((prevAside) => !prevAside)
  }

  return (
    <aside>
      <div className="Aside-Content">
        {aside && roomId ? (
          <RoomAside changeAside={changeAside} roomId={roomId} />
        ) : (
          <HomeAside changeAside={changeAside} />
        )}
      </div>
      <div className="Aside-Footer">
        <div>
          <div className="User">
            <div className="User-Avatar-Container">
              <img src={user?.avatar} alt={user?.userName}/>
            </div>
            <span className="User-Name"> {user?.userName}</span>
          </div>
          <button><i className="material-icons">navigate before</i></button>
        </div>
      </div>
      <style jsx>{styles}</style>
    </aside>
  )
}

export default Aside
