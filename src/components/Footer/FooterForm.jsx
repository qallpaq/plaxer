import React from 'react'
import {
  Button,
  Typography,
  Grid
} from '@material-ui/core'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import logo from '../../assets/images/logo.png'
import EmailForm from '../EmailForm'
import useStyles from './styles/footerFormStyles'


const FooterForm = () => {
  const classes = useStyles()

  const BtnVariant = () => {
    return (
      <Button
        className={classes.button}
        type='submit'
        startIcon={<ArrowForwardIcon/>}
      >
        Subscribe
      </Button>
    )
  }

  return (
    <Grid item xs={12} sm={6} md={3}>
      <img
        className={classes.logo}
        src={logo}
        alt="logo"
      />
      <EmailForm
        alertMessage='You with plaxer now'
        userMail='footerSubmit'
        BtnVariant={BtnVariant}
      />
      <Typography className={classes.text}>
        The world without photography will be meaningless to us.
      </Typography>
    </Grid>
  )
}

export default FooterForm
