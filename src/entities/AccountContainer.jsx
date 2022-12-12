import { useStore, useStoreMap } from "effector-react"

import { AccountText } from "../shered/AccountText"
import { $userLoginizationDate } from "./loginBtn/model-login-btn"

export const AccountContainer = () => {
  const user = useStoreMap({
    store: $userLoginizationDate,
    keys: ['status'],
    fn: obj => obj || {}
  })

  switch(user.status) {
    case 'loading': {
      return <AccountText text={'Loading...'} />
    }
    case 'feilure': {
      return <AccountText text={ <span>Ooops something goes wrong, error: <b>{user.errors}</b> </span>} />
    }
    case 'logged in': {
      return <AccountText text={`Welcome to your account ${user.data.name}`} />
    }
    case 'logout': {
      return <AccountText text={'Log in pls'} />
    }
    
    default: {
     return <div>Oops</div>
    }
  }

}