import { useState } from 'react'

function useInput (initialValue = '') {
  const [value, setValue] = useState(initialValue)

  const onChange = (e, value) => {
    const newValue = e ? e.target.value : value
    setValue(newValue)
  }

  return [value, onChange]
}

export default useInput
