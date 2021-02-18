import React from 'react'
import PropTypes from 'prop-types'
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

Btn.propTypes = {
  text: PropTypes.string.isRequired,
  fn: PropTypes.func
}

export default Btn
