import { createStore, createEffect, sample} from 'effector'
import { login } from './user-fakeApi'


export const logInFx = createEffect(({email, password}) => {
  return login(email, password)
}) 

const initStore = {
  status: 'logout'
}

export const $userLoginizationDate = createStore(initStore)
.on(logInFx.pending, (state, value) => {
  return value ? {status: 'loading'} : state
})
.on(logInFx.doneData, (state, data) => {
  return {
    status:'logged in',
    data
  }
})
.on(logInFx.failData, (state, error) => {
  return {
    status: 'feilure',
    errors: [error]
  }
})
// .on(logOut, (state) => ({status: 'logout'}))

