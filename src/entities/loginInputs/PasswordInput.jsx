import { useStore } from "effector-react"
import { StandartInput } from "../../shered/StandartInput"
import { $password, setPassword } from "./login-inputs-model"


export const PasswordInput = (props) => {
  const passwordValue = useStore($password).password
  console.log(passwordValue)
  // const {value, fn} = props.state

  return (
    // <StandartInput state={
    //   {value,fn, name: 'password', type: 'password', placeholder: 'type password'}
    // } />
    <StandartInput state={
      {value: passwordValue, fn: setPassword, name: 'password', type: 'password', placeholder: 'type password'}
    } />
  )
}