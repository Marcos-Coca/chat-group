import { LOGIN } from 'utils/constants/Login'

function useLogin (socialMedia) {
  const login = LOGIN[socialMedia]
  return function (param) {
    login(param)
      .then((user) => {
        console.log(user)
      })
      .catch((err) => console.log(err))
  }
}

export default useLogin
