import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import { items, settings } from './tools'
import Icons from '../Icons'
import './styles/style.css'


const SliderItem = ({img, name}) => (
  <div className='team-slider__item'>
    <div
      className='team-slider__img'
      style={{background: `url(${img}) 70% 10%`, backgroundSize: 'cover'}}
    >
      <div className='team-slider__inner'>
        View Profile
      </div>
    </div>
    <div className='team-slider__text'>
      <Typography className='team-slider__name'>
        {name}
      </Typography>
      <Icons/>
    </div>
  </div>
)

SliderItem.propTypes = {
  upper: PropTypes.string,
  down: PropTypes.string
}

const TeamSlider = () => (
  <div className='team-slider'>
    <Slider {...settings}>
      {items.map(slide => (
        <SliderItem
          img={slide.img}
          name={slide.name}
          key={slide.img}
        />
      ))}
    </Slider>
  </div>
)

export default TeamSlider
