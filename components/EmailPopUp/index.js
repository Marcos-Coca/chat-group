import { useState } from 'react'
function EmailPopUp ({ text, title, handleSubmit, show, setShow }) {
  const [email, setEmail] = useState('')

  const handleChange = (e) => {
    const value = e.target.value
    setEmail(value)
  }

  return <>
    {show &&
  <div>
    <h3>{title}</h3>
    <span>{text}</span>
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={handleChange}/>
      <button>Send</button>
    </form>
    <button onClick={() => setShow(false)} >Close</button>
    <style jsx>{`
        div{
            position:absolute;
            width:400px;
            height:300px;
            background:red;
        }
        `}</style>
  </div>
    }
  </>
}

export default EmailPopUp
