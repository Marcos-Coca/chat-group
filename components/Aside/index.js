import { useState } from 'react'

import RoomAside from 'components/RoomAside'
import HomeAside from 'components/HomeAside'
import AsideFooter from 'components/AsideFooter'

import styles from './styles'

function Aside ({ room = {} }) {
  const [checked, setChecked] = useState(!room.id)
  const [aside, setAside] = useState(Boolean(room.id))

  const changeAside = () => {
    setAside((prevAside) => !prevAside)
  }
  const handleChange = () => setChecked(prevChecked => !prevChecked)

  return (
    <>
      <input type="checkbox" checked={checked} onChange={handleChange} id="btnControl" />
      <label className="Hamburger" htmlFor="btnControl">
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </label>

      <aside>
        <div className="Aside-Content">
          {aside ? (
            <RoomAside changeAside={changeAside} room={room} />
          ) : (
            <HomeAside changeAside={changeAside} />
          )}
        </div>
        <AsideFooter roomId={room.id} />
      </aside>
      <style jsx>{styles}</style>
    </>
  )
}

export default Aside
