import React from 'react'
import {
  Container,
  Typography,
  Button
} from '@material-ui/core'
import useStyles from './styles/styles'
import { motion } from 'framer-motion'
import { useScroll } from '../../helpers'
import fadeInUp from './styles/animation'


const HomePageParallax = () => {
  const classes = useStyles()

  const [element, controls] = useScroll()

  return (
    <div className={classes.root}>
      <Container
        component={motion.div}
        ref={element}
        variants={fadeInUp}
        animate={controls}
      >
        <Typography className={classes.title}>
          baralmadym & Qasina
        </Typography>
        <Typography className={classes.subtitle}>
          Mаhаbbаt bаğındаğı
          Sаyrаğаn bŭlbŭl edіñ
          Sol bаqtаğı qızıl gülderden
          Tаndаğаnım sen edіñ
        </Typography>
        <Button>
          View shedule
        </Button>
      </Container>
    </div>
  )
}

export default HomePageParallax
