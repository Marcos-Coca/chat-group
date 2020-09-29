
import styles from './styles'
import { LOGIN_OPTIONS } from 'utils/constants'
import LoginButton from 'components/LoginButton'
import useRedirectOnAuth from 'hooks/useRedirectOnAuth'

function Login () {
  useRedirectOnAuth()

  return (
    <div className="container">
      <main>
        <h1>Chat Group</h1>
        <h3>Create an account and chat</h3>
        <div className="container-login">
          <LoginButton socialMedia={LOGIN_OPTIONS.Email} />
          <LoginButton socialMedia={LOGIN_OPTIONS.Google}/>
          <LoginButton socialMedia={LOGIN_OPTIONS.Twitter} fill='#fff' />
          <LoginButton socialMedia={LOGIN_OPTIONS.GitHub} fill="#fff"/>
          <LoginButton socialMedia={LOGIN_OPTIONS.Facebook}fill="#fff"/>
        </div>
      </main>

      <style jsx>{styles}</style>
    </div>
  )
}

export default Login
