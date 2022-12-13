const validEmail = 'some@gmail.com'
const validPass = 'some12345'

const userInfo = {
  name:'Nathan',
  email: validEmail
}

export function login(email, password) {
  const delay = 3000
  return new Promise((res, rej) => {
    setTimeout(() => {
      if(email === validEmail && password === validPass) {
        res(userInfo)
      } else {
        rej('Wrong email or rassword')
      }
    }, delay)
  })
}