import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import { isDota, items, settings } from './tools'
import './styles/sltyes.css'


const SubtitleLeftItem = ({upper, down}) => (
  <div className="content-slider__left-item">
    <Typography className='left-item__upper'>
      {upper}
    </Typography>
    <br/>
    <Typography
      className='left-item__down'
      color='primary'
    >
      {down}
    </Typography>
  </div>
)

SubtitleLeftItem.propTypes = {
  upper: PropTypes.string,
  down: PropTypes.string,
}

const HomePageContentSlider = () => (
  <div className='home-page__content__slider'>
    <Slider {...settings}>
      {items.map(slide => (
        <div className="content-slider-item" key={slide.img}>
          <div className={`slider-svg-wrapper ${isDota(slide)}`}>
            <img src={slide.svg} alt="slide-logo"/>
          </div>
          <div className="slider-img-wrapper">
            <img src={slide.img} alt="slide"/>
            <div className="content-slider-title">
              eSport League CSGO Division
            </div>
          </div>
          <div className="content-slider__text">
            <div className="content-slider-subtitle">
              <div className="content-slider__left">
                <SubtitleLeftItem
                  upper='4 Groups'
                  down='32 Players'
                />
                <SubtitleLeftItem
                  upper='Prize Pool'
                  down='5000$'
                />
              </div>
              <div className="content-slider__right">
                Feb.07.2021 - 06:43 pm
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>
)

export default HomePageContentSlider
