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
    <>
      <input type="checkbox" id="btnControl" />
      <label className="Hamburger" htmlFor="btnControl">
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </label>

      <aside>
        <div className="Aside-Content">
          {aside && roomId ? (
            <RoomAside changeAside={changeAside} roomId={roomId} />
          ) : (
            <HomeAside changeAside={changeAside} />
          )}
        </div>
        <AsideFooter router={router} roomId={roomId} />
      </aside>
      <style jsx>{styles}</style>
    </>
  )
}

export default Aside
