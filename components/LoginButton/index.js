import useLogin from 'hooks/useLogin'
import { LOGIN_OPTIONS } from 'utils/constants'

import styles from './styles'
import Email from 'components/Icons/Email'
import Google from 'components/Icons/Google'
import GitHub from 'components/Icons/GitHub'
import Twitter from 'components/Icons/Twitter'
import Facebook from 'components/Icons/Facebook'

export const ICONS = {
  [LOGIN_OPTIONS.GitHub]: GitHub,
  [LOGIN_OPTIONS.Google]: Google,
  [LOGIN_OPTIONS.Twitter]: Twitter,
  [LOGIN_OPTIONS.Facebook]: Facebook,
  [LOGIN_OPTIONS.Email]: Email
}

function LoginButton ({ socialMedia, fill }) {
  const Icon = ICONS[socialMedia]
  const handleClick = useLogin(socialMedia)

  return <button onClick={handleClick}>
    <Icon fill={fill} height={24} width={24} />
    <span>Sign in with {socialMedia}</span>
    <style jsx>{styles}</style>
  </button>
}

export default LoginButton
