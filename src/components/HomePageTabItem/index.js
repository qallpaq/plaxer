import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { Grid, Typography } from '@material-ui/core'
import TabItemCard from './TabItemCard'
import { createRandomDate } from '../../helpers'
import twitch from '../../assets/images/twitch.svg'
import useStyles from './styles/styles'
import { fadeInLeft, fadeInUp } from './styles/animation'


const TabItem = props => {
  const {children, value, index, item, ...other} = props
  const classes = useStyles()

  return (
    <motion.div
      className={classes.root}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      variants={fadeInLeft}
      initial='hidden'
      animate='visible'
    >
      {value === index && (
        <Grid
          container
          component={motion.div}
          variants={fadeInUp}
        >
          <Grid
            className={classes.item}
            item
            xs={12}
            md={4}
          >
            <TabItemCard {...item.team1}/>
            <Typography className={classes.versus}>
              VS
            </Typography>
            <TabItemCard {...item.team2}/>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className={classes.text}>
              <Typography className={classes.title}>
                eSport League - {item.title} Division
              </Typography>
              <Typography className={classes.date}>
                {createRandomDate()}
              </Typography>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={2}
            className={classes.stream}
          >
            <Typography className={classes.twitch}>
              <img
                className={classes.twitchLogo}
                src={twitch}
                alt="twitch"
              />
              twitch stream
            </Typography>
          </Grid>
        </Grid>
      )}
    </motion.div>
  )
}

TabItem.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
  item: PropTypes.object.isRequired
}

export default TabItem
