import { Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles: any = makeStyles({
  MyTypografy: {
    fontSize: 20,
    fontWeight: 900
  }
})

type TextPropsType =  {
  text: string | HTMLElement | any
}

export const AccountText = ({text}: TextPropsType ) => {
  const classes = useStyles()

  return (
     <Typography 
     className={classes.MyTypografy}
     >
      {text}
     </Typography>
  )
}
