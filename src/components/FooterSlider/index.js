import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { settings, slides } from './tools'
import './styles/style.css'


const createSlide = slide => (
  <img
    className='slider__item-img'
    key={slide}
    src={slide}
    alt="slide"
  />
)

const FooterSlider = () => (
  <div className='footer__slider'>
    <Slider {...settings}>
      {slides.map(createSlide)}
    </Slider>
  </div>
)

export default FooterSlider
