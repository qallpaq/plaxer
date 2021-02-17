import React from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {
  Button,
  Container,
  Typography
} from '@material-ui/core'
import { items, settings } from './tools'
import Icons from '../Icons'
import './styles/style.css'


const CreateSlide = ({number, text1, text2}) => {
  const classes = `slider__background slider__background_${number}`

  return (
    <div className={classes} key={text1}>
      <Container>
        <div className='slider__item-title'>
          <div className='slider__figure'>
            0{number}
          </div>
          <Typography className='title__text' component={'h3'}>
            {text1}
            <br/>
            {text2}
          </Typography>
          <Button className='slider__btn'>
            Watch now
          </Button>
        </div>
      </Container>
    </div>
  )
}

CreateSlide.propTypes = {
  number: PropTypes.string.isRequired,
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired
}

const HomePageSlider = () => (
  <>
    <div className="home-page__icons">
      <Icons flexDirection='column'/>
    </div>
    <Slider {...settings}>
      {items.map(slide => <CreateSlide {...slide} key={slide.number}/>)}
    </Slider>
  </>
)

export default HomePageSlider
