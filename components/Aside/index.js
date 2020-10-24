import { useState } from 'react'
import { useRouter } from 'next/router'

import RoomAside from 'components/RoomAside'
import HomeAside from 'components/HomeAside'
import AsideFooter from 'components/AsideFooter'

import styles from './styles'

function Aside () {
  const router = useRouter()
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
      <AsideFooter router={router} roomId={roomId}/>
      <style jsx>{styles}</style>
    </aside>
  )
}

export default Aside
