import { useState } from 'react'

function useInput (initialValue) {
  const [value, setValue] = useState(initialValue)

  const onChange = (e) => {
    const newValue = e.target.value
    setValue(newValue)
  }

  return [value, onChange]
}

export default useInput
