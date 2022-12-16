import { useStoreMap } from "effector-react"
import { TextField,  } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import {blue, purple} from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles'

import { handleChange, $loginData } from "./input-model"

const useStyles = makeStyles(theme => ({
  textField:{
    marginBottom: 15,
    maxWidth: 400,
    minWidth: 400,
    ['& .Mui-focused + div.Mui-focused']: {
      border: '1px solid transparent',
    },
    ['& .MuiOutlinedInput-root']: {
      transition: 'border .3s',
      border: `1px solid ${ purple[500]}`,
      ['&:hover']: {
        border: `1px solid ${ purple[300]}`,
      },
    },

  },
  input:{
    color: 'white' ,
    padding: '20px 30px',
  },
  label:{
    color: purple[500],
  }
}))



const theme = createTheme({
  palette: {
    common: {
      light: purple[300],
      main: purple[400],
      dark: purple[500],
      contrastText: '#fff',
    },
    primary: {
      light: blue[300],
      main: blue[400],
      dark: blue[500],
      contrastText: '#fff',
    }
  }
})

export const LoginInput = ({name, type, placeholder}) => {

  const classes = useStyles()

  const value = useStoreMap({
    store: $loginData,
    keys: [name],
    fn: values => values[name] || ''
  })

  return (
    <ThemeProvider theme={theme}>
      <TextField
      className={classes.textField}
      inputProps={{className: classes.input}}
      InputLabelProps={{className: classes.label}}
      variant="outlined"
      margin="normal"
      required
      // fullWidth
      name={name}
      label={placeholder}
      type={type}
      color='primary'
      onChange={(e) => handleChange(e)}
      value={value} 
     />
    </ThemeProvider>

  )
}