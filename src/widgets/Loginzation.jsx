import { AccountContainer } from '../entities/AccountContainer'
import { LogInBtn } from '../entities/loginBtn/LogInBtn'
import { LoginInput } from '../shered/LoginInput'



export const Loginization = () => {

  return (
    <div>
       <p>Your email: some@gmail.com</p>
       <p>Pass: some12345</p>
       <LoginInput name='email' type='email' placeholder='type email' />
       <br />
       <LoginInput name='password' type='password' placeholder='type password' />
       <br />
       <LogInBtn type='button' text='log in' />
       <AccountContainer /> 
    </div>
  )
}