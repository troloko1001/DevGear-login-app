import * as React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles'
import { Container} from '@material-ui/core'

import {LoginPage} from './page/LoginPage'
import './App.css'

const useStyles = makeStyles({
  myContiner: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    width: '100%'
  }
})


function App() {

  const classes = useStyles()
  return (
    // <div className='app'>
      // <CssBaseline />
      <Container
      maxWidth='lg'
      className={classes.myContiner}
      disableGutters={true}
      >
        <LoginPage />
      </Container>
    // </div>
  )

}

export default App

// come up plan how to connect $Statusstore and inputstore and use sambple 
// to activete loginFX
// Will do all job with github
// And do respectable distrucion of props

