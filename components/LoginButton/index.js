import { useState } from 'react'

import styles from './styles'
import useLogin from 'hooks/useLogin'
import EmailPopUp from 'components/EmailPopUp'

import { ICONS } from 'utils/constants/Icons'
import { LOGIN_OPTIONS } from 'utils/constants/loginOptions'

function LoginButton ({ socialMedia, fill }) {
  const Icon = ICONS[socialMedia]
  const login = useLogin(socialMedia)
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

  const handleEmailClick = (e, email) => {
    e.preventDefault()
    login(email)
      .then(() => {
        window.localStorage.setItem('emailForSignIn', email)
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
      handleSubmit={handleEmailClick} />
    <style jsx>{styles}</style>
  </>
}

export default LoginButton
