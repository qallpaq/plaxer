import React from 'react'
import { Link } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import useStyles from './styles/styles'


const Share = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography
        className={classes.title}
        variant='h4'
        align='center'
      >
        Share with <span className={classes.share}>#plaxer</span>
      </Typography>
      <Typography className={classes.subtitle}>
        Follow us <Link to='#' className={classes.name}>@jacombo</Link>
      </Typography>
    </div>
  )
}

export default Share
