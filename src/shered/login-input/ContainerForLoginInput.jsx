import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { LoginInput } from "./LoginInput";

const useStyle = makeStyles({
  LoginInputContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
    marginBottom: 20,
    padding: 0
  }
})

export const  ContainerForLoginInput = () => {
  const classes = useStyle()

  return (
    <Container className={classes.LoginInputContainer}>
      <LoginInput name='email' type='email' placeholder='type email' />
      <LoginInput name='password' type='password' placeholder='type password' />
    </Container>
  )
}