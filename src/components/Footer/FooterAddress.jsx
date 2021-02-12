import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Typography, IconButton } from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import useStyles from './styles/footerCommentsStyles'


const FooterAddress = () => {
  const classes = useStyles()

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Typography className={classes.title} variant='h6'>
        Address
      </Typography>
      <Typography className={classes.text}>
        Baker Street 223b London, CA 70413
        Open: 9:30 AM 5:30PM
      </Typography>
      <Typography className={classes.text}>
        Phone:
        +1 (800) 456 37 11
      </Typography>
      <Typography className={classes.text}>
        Email:
        support@promo-theme.com
      </Typography>
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
    </Grid>
  )
}

export default FooterAddress
