import React from 'react'
import { Link } from 'react-router-dom'
import { IconButton } from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
  icon: {
    margin: '0 -3px',
    color: '#fff',
    transition: '.2s',
    '&:hover': {
      color: theme.palette.primary.main
    }
  }
}))

const Icons = () => {
  const classes = useStyles()

  return (
    <div>
      <IconButton onClick={e => e.preventDefault()}>
        <Link to="#">
          <TwitterIcon className={classes.icon}/>
        </Link>
      </IconButton>
      <IconButton>
        <Link to="#">
          <FacebookIcon className={classes.icon}/>
        </Link>
      </IconButton>
      <IconButton>
        <Link to="#">
          <InstagramIcon className={classes.icon}/>
        </Link>
      </IconButton>
    </div>
  )
}

export default Icons
