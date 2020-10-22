import { useState, useEffect } from 'react'

import useInput from 'hooks/useInput'
import Search from 'components/Icons/Search'
import RoomSearchResults from 'components/RoomSearchResults'

import styles from './styles'

function RoomSearch () {
  const [value, setValue] = useInput('')
  const [focus, setFocus] = useState(false)
  const [search, setSearch] = useState(false)

  const handleFocus = () => setFocus(true)
  const handleBlur = () => setFocus(false)

  useEffect(() => {
    value.length >= 3 ? setSearch(true) : setSearch(false)
  }, [value])

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <span>
          <Search fill="var(--font-main-color)" height="20px" width="20px" />
        </span>
        <input
          type="text"
          placeholder="Search"
          value={value}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onChange={setValue}
        />
      </form>
      {focus && (
        <div className="Test">
          {search ? <RoomSearchResults value={value}/> : <span>Enter at least 3 characters to search</span>}
        </div>
      )}
      <style jsx>{styles}</style>
    </>
  )
}

export default RoomSearch
