import React from 'react'
import {
  Grid,
  Container,
  Typography,
} from '@material-ui/core'
import ReactPlayer from 'react-player'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
import useStyles from './styles/styles'
import Btn from '../Btn'


const HomePageVideo = () => {
  const classes = useStyles()

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))

  const playerDisplay = {
    display: isMobile ? 'none' : 'block',
    margin: 'auto',
    maxWidth: '100%'
  }

  return (
    <Container>
      <Grid
        className={classes.root}
        container
        alignItems='center'
        justify="space-between"
      >
        <Grid item sm={12} md={5}>
          <Typography className={classes.title} variant='h4'>
            Game theme for each
            <br/>
            direction and more.
          </Typography>
          <Typography className={classes.subtitle} variant='body1'>
            What I've got you've got to give it to your mama
            What I've got you've got to give it to your pappa
            What I've got you've got to give it to your daughter
            You do a little dance and then you drink a little water
            What I've got you've got to get it put it in you
            What I've got you've got to get it put it in you
            What I've got you've got to get it put it in you
            Reeling with the feeling don't stop continue
          </Typography>
          <Btn text='Read More'/>
        </Grid>
        <Grid item sm={12} md={5}>
          <ReactPlayer
            style={playerDisplay}
            url='https://www.youtube.com/watch?v=vIKqF0qXg9Q&ab_channel=Foals'
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default HomePageVideo
