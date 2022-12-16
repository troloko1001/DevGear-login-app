import { useStore } from "effector-react"

import { ButtonCommon } from "../../shered/ButtonCommon"
import { logInFx } from "./model-login-btn"
import { $loginData } from '../../shered/login-input/input-model'

export const LogInBtn = ({type, text}) => {
  const loginData = useStore($loginData)

  return (
    <ButtonCommon 
    type={type}
    text={text}
    fn={logInFx}
    param={loginData}
    />
  )
}