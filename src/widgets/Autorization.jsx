import { useStoreMap } from 'effector-react'

import { AccountContainer } from '../entities/AccountContainer'
import { FakeAutorizationData } from '../entities/FakeAutorizationData'
import { LogInBtn } from '../features/loginBtn/LogInBtn'
import { $userLoginizationDate } from '../features/loginBtn/model-login-btn'
import { ContainerForLoginInput } from '../shered/login-input/ContainerForLoginInput'
import { MaxWithContainer } from '../shered/ui/maxWithContainer'


export const Autorization = () => {

  const user = useStoreMap({
    store: $userLoginizationDate,
    keys: ['status'],
    fn: obj => obj || {}
  })
 
  return (
    <div maxWidth='500px'>
       <FakeAutorizationData />
       <ContainerForLoginInput />
       <LogInBtn type='button' text='log in' />
       <AccountContainer user={user} /> 
    </div>
  )
}