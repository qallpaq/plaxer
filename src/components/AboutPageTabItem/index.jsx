import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography } from '@material-ui/core'
import { motion } from 'framer-motion'
import twitch from '../../assets/images/twitch.svg'
import { fadeInLeft, fadeInUp } from '../HomePageTabItem/styles/animation'
import useStyles from './styles/styles'


const TabItem = ({value, index, item}) => {
  const {img, date} = item

  const classes = useStyles()

  return (
    <motion.div
      className={classes.root}
      variants={fadeInLeft}
      initial='hidden'
      animate='visible'
      hidden={value !== index}
    >
      <Grid
        className={classes.item}
        component={motion.div}
        variants={fadeInUp}
        container
      >
        <Grid
          className={classes.item}
          item
          xs={12}
          sm={4}
        >
          <img
            className={classes.img}
            src={img}
            alt="game"
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <motion.div className={classes.text}>
            <Typography className={classes.title}>
              eSport League - {item.title}
            </Typography>
            <Typography className={classes.date}>
              {date}
            </Typography>
          </motion.div>
        </Grid>
        <Grid
          className={classes.stream}
          item
          xs={12}
          sm={3}
        >
          <img
            className={classes.twitchLogo}
            src={twitch}
            alt="twitch"
          />
          <Typography className={classes.twitch}>
            twitch stream
          </Typography>
        </Grid>
      </Grid>
    </motion.div>
  )
}

TabItem.propTypes = {
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  item: PropTypes.object.isRequired
}

export default TabItem
