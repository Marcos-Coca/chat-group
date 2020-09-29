import { LOGIN_OPTIONS } from 'utils/constants/loginOptions'

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
