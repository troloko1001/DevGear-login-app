import * as React from "react";
import CssBaseline from '@mui/material';
import { makeStyles } from '@mui/styles'
import { Container} from '@mui/material'

import {LoginPage} from './page/LoginPage'
import './App.css'

const useStyles: any = makeStyles({
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

// Change text color wich must depends of thee me of page(dark/light)
// Will make all code in TS form and relevant ts without any 'any'or so on 
//After make refactoring by FSD
//After chill and watch Netfflix lazy punk