import React from 'react'
import {
  Container,
  Grid,
  Typography,
  Divider
} from '@material-ui/core'
import FooterComments from './FooterComments'
import FooterAddress from './FooterAddress'
import FooterPosts from './FooterPosts'
import FooterForm from './FooterForm'
import useStyles from './styles/styles'


const Footer = () => {
  const classes = useStyles()

  return (
    <footer className={classes.root}>
      <Container>
        <Grid container spacing={3}>
          <FooterForm/>
          <FooterAddress/>
          <FooterPosts/>
          <FooterComments/>
          <Divider/>
        </Grid>
        <Divider className={classes.divider}/>
        <Grid container>
          <Grid item xs={10}>
            <Typography className={classes.text}>
              © 2019, SOMO Theme by Promo Theme
              <span className={classes.link}> Jacombo</span> |
              <span className={classes.link}> Urin</span> |
              <span className={classes.link}> Khan</span>
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography className={classes.text} align='right'>
              All Rights Reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  )
}

export default Footer
