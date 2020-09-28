import { useState } from 'react'
function EmailPopUp ({ text, setValue }) {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setValue(email)
  }

  const handleChange = (e) => {
    const value = e.target.value
    setEmail(value)
  }

  return <div>
    <span>{text}</span>
    <form onSubmit={handleSubmit}>
      <input type="email" name="" id="" value={email} onChange={handleChange}/>
      <button>Send</button>
    </form>
    <style jsx>{`
        div{
            position:absolute;
            width:40px;
            height:300px;
            background:red;
        }
        `}</style>
  </div>
}

export default EmailPopUp
