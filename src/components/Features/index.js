import React from 'react'
import {
  Grid,
  Container
} from '@material-ui/core'
import FeatureItem from './FeaturesItem'
import twitchLogo from '../../assets/images/twitch.svg'
import youtubeLogo from '../../assets/images/youtube-logotype.svg'
import team from '../../assets/images/team.svg'
import gamepad from '../../assets/images/gamepad.svg'
import useStyles from './styles/styles'
import { useScroll } from '../../helpers'
import { motion } from 'framer-motion'
import { container } from './styles/animation'


const Features = () => {
  const classes = useStyles()

  const [element, controls] = useScroll()

  return (
    <Container
      className={classes.root}>
      <Grid
        container
        component={motion.div}
        ref={element}
        variants={container}
        animate={controls}
      >
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
      </Grid>
    </Container>
  )
}

export default Features
