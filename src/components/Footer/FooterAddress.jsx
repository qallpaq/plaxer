import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import useStyles from './styles/footerCommentsStyles'
import Icons from '../Icons'


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
        +7 (800) 456 37 11
      </Typography>
      <Typography className={classes.text}>
        Email:
        callpack96@gmail.com
      </Typography>
      <Icons/>
    </Grid>
  )
}

export default FooterAddress
