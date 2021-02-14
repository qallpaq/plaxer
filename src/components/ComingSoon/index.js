import React from 'react'
import {
  Typography,
  Grid
} from '@material-ui/core'
import valorant from '../../assets/images/valorant_1-min.jpg'
import calda from '../../assets/images/calda-min.jpg'
import ComingItem from './ComingItem'
import { motion } from 'framer-motion'
import useStyles from './styles/styles'
import { slideInRight } from './styles/animtaion'


const ComingSoon = () => {
  const classes = useStyles()

  return (
    <motion.div
      variants={slideInRight}
      initial='hidden'
      animate='visible'
    >
      <Typography className={classes.title} variant='h4'>
        Coming soon
      </Typography>
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          sm={6}
          md={12}
        >
          <ComingItem img={valorant} text='Valorant'/>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={12}
        >
          <ComingItem img={calda} text='Call of Duty 17'/>
        </Grid>
      </Grid>
    </motion.div>
  )
}

export default ComingSoon
