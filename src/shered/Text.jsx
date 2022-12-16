import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  MyText: {
    fontSize: 16,
    fontWeight: 500,
    textAlign: 'center',
    marginBottom: 15
  }
})

export const Text = ({children}) => {
const  classes = useStyles()
  return (
    <Typography className={classes.MyText}>
      {children}
    </Typography>
  )
}