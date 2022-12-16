import {Typography} from '@material-ui/core'
import { makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  MyTypografy: {
    fontSize: 20,
    fontWeight: 900
  }
})

export const AccountText = ({text}) => {
  const classes = useStyles()
  return (
     <Typography 
     className={classes.MyTypografy}
     >
      {text}
     </Typography>
  )
}
