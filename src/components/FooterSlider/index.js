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


const Slide = ({slide}) => {
  const dispatch = useDispatch()
  const changeModal = payload => {
    dispatch(changeModalSlide(payload))
  }

  return (
    <div className='footer__slider-item'>
      <span
        className='slider__item-context'
        onDoubleClick={() => changeModal(slide)}
      >
        double click
      </span>
      <img
        className='slider__item-img'
        key={slide}
        src={slide}
        alt="slide"
        onDoubleClick={() => changeModal(slide)}
      />
    </div>
  )
}

Slide.propTypes = {
  slide: PropTypes.string.isRequired
}

const FooterSlider = () => {
  const isModalActive = useSelector(state => state.root.isModalSlideActive)

  return (
    <div className='footer__slider'>
      {isModalActive ? <ModalSlide/> : ''}
      <Slider {...settings}>
        {slides.map(slide => <Slide slide={slide} key={slide}/>)}
      </Slider>
    </div>
  )
}

export default FooterSlider
