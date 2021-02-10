import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {
  Button,
  Container,
  IconButton,
  Typography
} from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import { items, settings } from './tools'
import { motion } from 'framer-motion'
import { slideInLeft } from './styles/animation'
import './styles/style.css'


const createSlide = ({number, text1, text2}) => {
  const classes = `slider__background slider__background_${number}`

  return (
    <div className={classes} key={text1}>
      <Container>
        <div className='slider__item-title'>
          <motion.div
            className='slider__figure'
            variants={slideInLeft('.4')}
            initial='hidden'
            animate='visible'
          >
            0{number}
          </motion.div>
          <Typography
            className='title__text'
            component={motion.h3}
            variants={slideInLeft('1')}
            initial='hidden'
            animate='visible'
          >
            {text1}
            <br/>
            {text2}
          </Typography>
          <Button
            component={motion.button}
            variants={slideInLeft('1')}
            initial='hidden'
            animate='visible'
          >
            Watch now
          </Button>
        </div>
      </Container>
    </div>
  )
}

const HomePageSlider = () => (
  <>
    <div className="home-page__icons">
      <IconButton>
        <InstagramIcon className='icon__item' fontSize='small'/>
      </IconButton>
      <IconButton>
        <FacebookIcon className='icon__item' fontSize='small'/>
      </IconButton>
      <IconButton>
        <TwitterIcon className='icon__item' fontSize='small'/>
      </IconButton>
    </div>
    <Slider {...settings}>
      {items.map(createSlide)}
    </Slider>
  </>
)

export default HomePageSlider
