import React from 'react'
import PropTypes from 'prop-types'
import { IconButton, makeStyles } from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'


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

const Icons = ({flexDirection = 'row'}) => {
  const classes = useStyles()

  return (
    <div style={{flexDirection: flexDirection}}>
      <IconButton>
        <a href="https://twitter.com/?lang=ru" target='_blank'>
          <TwitterIcon className={classes.icon}/>
        </a>
      </IconButton>
      <IconButton>
        <a href="https://ru-ru.facebook.com/" target='_blank'>
          <FacebookIcon className={classes.icon}/>
        </a>
      </IconButton>
      <IconButton>
        <a href="https://www.instagram.com/?hl=ru" target='_blank'>
          <InstagramIcon className={classes.icon}/>
        </a>
      </IconButton>
    </div>
  )
}

Icons.propTypes = {
  flexDirection: PropTypes.string
}

export default Icons
