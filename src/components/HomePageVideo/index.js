import React from 'react'
import {
  Grid,
  Container,
  Typography,
  Button
} from '@material-ui/core'
import ReactPlayer from 'react-player'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
import useStyles from './styles/styles'


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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, s
            ed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Quis ipsum suspendisse ultrices grav
            ida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
          </Typography>
          <Button>Read more</Button>
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
