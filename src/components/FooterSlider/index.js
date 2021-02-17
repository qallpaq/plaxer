import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { settings, slides } from './tools'
import { changeModalSlide } from '../../redux/actions'
import ModalSlide from './ModalSlide'
import './styles/style.css'
import Share from '../Share'


const Slide = ({slide}) => {
  const dispatch = useDispatch()

  let mouseX

  const mouseDownHandler = e => {
    mouseX = e.clientX
  }

  const mouseUpHandler = e => {
    if (mouseX === e.clientX) {
      dispatch(changeModalSlide(slide))
    }
  }

  return (
    <div className='footer__slider-item'>
      <img
        className='slider__item-img'
        key={slide}
        src={slide}
        alt="slide"
        onMouseDown={mouseDownHandler}
        onMouseUp={mouseUpHandler}
      />
    </div>
  )
}

Slide.propTypes = {
  slide: PropTypes.string.isRequired
}

const FooterSlider = () => {
  const currentSlide = useSelector(({root}) => root.currentModalSlide)

  return (
    <div className='footer__slider'>
      <Share/>
      {currentSlide && <ModalSlide/>}
      <Slider {...settings}>
        {slides.map(slide => <Slide slide={slide} key={slide}/>)}
      </Slider>
    </div>
  )
}

export default FooterSlider
