import { useStore } from "effector-react"
import { StandartInput } from "../../shered/StandartInput"
import { $email, setEmail } from "./login-inputs-model"


export const EmailInput = (props) => {
  const emailValue = useStore($email).email
  // const {value, fn} = props.state

  return (
    <StandartInput state={
      {value: emailValue,fn: setEmail, name: 'email', type: 'email', placeholder: 'type email'}
    } />
    // <StandartInput state={
    //   {value,fn, name: 'email', type: 'email', placeholder: 'type email'}
    // } />
  )
}