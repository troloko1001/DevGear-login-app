import { useStore } from "effector-react"

import { Button } from "../../shered/Button"
import { logInFx } from "./model-login-btn"
import { $loginData } from '../../shered/login-input/input-model'

export const LogInBtn = ({type, text}) => {
  const loginData = useStore($loginData)

  return (
    <Button 
    type={type}
    text={text}
    fn={logInFx}
    param={loginData}
    />
  )
}