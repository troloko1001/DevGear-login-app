import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  button: {
    backgroundColor: '#ab47bc',
    border: '2px solid #ce93d8',
    marginBottom: 20,
    ['&:hover']: {
      border: '2px solid #90caf9',
      backgroundColor: '#42a5f5'
    }
  }
})


export const ButtonCommon = ({type = 'button', text, fn, param}) => {  
  const classes = useStyles()

  return(
    <Button
    className={classes.button}
    onClick={() => fn(param)}
    variant="contained"
     color="primary"
     type='type'
    >
      {text}
    </Button>
  )
}