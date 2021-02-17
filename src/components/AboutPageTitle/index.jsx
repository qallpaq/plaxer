import React from 'react'
import { Container, Grid } from '@material-ui/core'
import AboutPageTabs from '../AboutPageTabs'
import { motion } from 'framer-motion'
import useStyles from './styles/styles'
import { slideInTop } from './styles/animation'


const AboutPageTitle = () => {
  const classes = useStyles()

  return (
    <Container className={classes.root}>
      <Grid container spacing={4}>
        <Grid
          className={classes.item}
          item
          sm={12}
          md={6}
        >
          <motion.div
            className={classes.img}
            variants={slideInTop}
            initial='hidden'
            animate='visible'
          />
        </Grid>
        <Grid item sm={12} md={6}>
          <AboutPageTabs/>
        </Grid>
      </Grid>
    </Container>
  )
}

export default AboutPageTitle
