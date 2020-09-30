import { useState } from 'react'

import styles from './styles'
import EmailPopUp from 'components/EmailPopUp'

import { LOGIN } from 'utils/constants/Login'
import { ICONS } from 'utils/constants/Icons'
import { LOGIN_OPTIONS } from 'utils/constants/loginOptions'

function LoginButton ({ socialMedia, fill }) {
  const Icon = ICONS[socialMedia]
  const login = LOGIN[socialMedia]
  const [showEmailModal, setShowEmailModal] = useState(false)

  const handleClick = () => {
    const isEmail = socialMedia === LOGIN_OPTIONS.Email
    isEmail ? setShowEmailModal(true) : loginWithSocialMedia()
  }

  const loginWithSocialMedia = () => {
    login().then((user) => {
      console.log(user)
    })
      .catch((err) => console.log(err))
  }

  const handleEmailClick = (email) => {
    login(email)
      .then(() => {
        window.localStorage.setItem('emailForSignIn', email)
        alert(`We just emailed a confirmation link to ${email}. Click the link to complete your account set-up.`)
      })
      .catch((err) => console.log(err))
  }

  return <>
    <button onClick={handleClick}>
      <Icon fill={fill} height={24} width={24} />
      <span>Sign in with {socialMedia}</span>
    </button>
    <EmailPopUp
      title="Sign in with email"
      text="Enter the email address associated with your account, and we'll send a magic link to your inbox."
      show={showEmailModal}
      setShow={setShowEmailModal}
      onSubmit={handleEmailClick} />
    <style jsx>{styles}</style>
  </>
}

export default LoginButton
