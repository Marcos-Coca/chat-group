import { useEffect } from 'react'

import useInput from 'hooks/useInput'
import Search from 'components/Icons/Search'

import styles from './styles'

function RoomSearch ({ setSearch }) {
  const [value, setValue] = useInput('')

  useEffect(() => {
    value ? setSearch(value) : setSearch(false)
  }, [value])

  return (
    <div style={{ position: 'relative' }}>
      <form onSubmit={(e) => e.preventDefault()}>
        <span>
          <Search fill="var(--font-main-color)" height="20px" width="20px" />
        </span>
        <input
          type="text"
          placeholder="Search"
          value={value}
          onChange={setValue}
        />
      </form>
      <style jsx>{styles}</style>
    </div>
  )
}

export default RoomSearch
