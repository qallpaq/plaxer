import React from 'react'
import {
  Typography,
  Grid,
  Container,
} from '@material-ui/core'
import FeatureItem from './FeaturesItem'
import twitchLogo from '../../assets/images/twitch.svg'
import youtubeLogo from '../../assets/images/youtube-logotype.svg'
import team from '../../assets/images/team.svg'
import gamepad from '../../assets/images/gamepad.svg'
import useStyles from './styles/styles'


const HomePageFeatures = () => {
  const classes = useStyles()

  return (
    <Container className={classes.root}>
      <Grid container>
        <FeatureItem
          img={twitchLogo}
          number='1300+'
          name='twitch streams'
        />
        <FeatureItem
          img={youtubeLogo}
          number='1100+'
          name='youtube streams'
        />
        <FeatureItem
          img={gamepad}
          number='900+'
          name='past games'
        />
        <FeatureItem
          img={team}
          number='256+'
          name='pro teams'
        />
        <Grid item xs={12}>
          <Typography
            variant='h4'
            align='center'
            className={classes.footer}
          >
            Share with
            <span className={classes.share}>
              #plaxer
            </span>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default HomePageFeatures
