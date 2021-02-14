import React from 'react'
import { Button, Typography } from '@material-ui/core'
import useStyles from './styles/styles'


const Btn = ({text, fn = () => null}) => {
  const classes = useStyles()

  return (
    <Button className={classes.root} onClick={fn}>
      <Typography className={classes.text}>
        {text}
      </Typography>
    </Button>
  )
}

export default Btn
