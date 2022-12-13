import { useStoreMap } from 'effector-react'

import { AccountContainer } from '../entities/AccountContainer'
import { FakeAutorizationData } from '../entities/FakeAutorizationData'
import { LogInBtn } from '../features/loginBtn/LogInBtn'
import { $userLoginizationDate } from '../features/loginBtn/model-login-btn'
import { LoginInput } from '../shered/login-input/LoginInput'



export const Autorization = () => {

  const user = useStoreMap({
    store: $userLoginizationDate,
    keys: ['status'],
    fn: obj => obj || {}
  })
 
  return (
    <div>
       <FakeAutorizationData />
       <LoginInput name='email' type='email' placeholder='type email' />
       <br />
       <LoginInput name='password' type='password' placeholder='type password' />
       <br />
       <LogInBtn type='button' text='log in' />
       <AccountContainer user={user} /> 
    </div>
  )
}