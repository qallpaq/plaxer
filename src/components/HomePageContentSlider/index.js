import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import './styles/style.css'
import csgo from '../../assets/images/contentSlider/1.jpg'
import csgoLogo from '../../assets/images/contentSlider/logos/csgo.svg'
import dota from '../../assets/images/contentSlider/2.jpg'
import dotaLogo from '../../assets/images/contentSlider/logos/dota-2.svg'
import pubg from '../../assets/images/contentSlider/3.jpg'
import pubgLogo from '../../assets/images/contentSlider/logos/pubg.svg'
import csgo2 from '../../assets/images/contentSlider/4.jpg'
import fortnite from '../../assets/images/contentSlider/5.jpg'
import fortniteLogo from '../../assets/images/contentSlider/logos/fortnite.svg'


const SubtitleLeftItem = ({upper, down}) => (
  <div className="content-slider__left-item">
    <Typography className='left-item__upper'>
      {upper}
    </Typography>
    <br className='content-slider__break'/>
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
  down: PropTypes.string
}

const HomePageContentSlider = () => {
  const items = [
    {img: csgo, svg: csgoLogo},
    {img: dota, svg: dotaLogo},
    {img: pubg, svg: pubgLogo},
    {img: csgo2, svg: csgoLogo},
    {img: fortnite, svg: fortniteLogo}
  ]

  const settings = {
    lazyLoad: 'ondemand',
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 4,
    touchThreshold: 12,
    responsive: [
      {
        breakpoint: 1740,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }

  const isDota = slide => {
    return slide.svg === dotaLogo
      ? 'slider-svg-wrapper_dota'
      : ''
  }

  return (
    <div className='home-page__content__slider'>
      <Slider {...settings}>
        {items.map(slide => (
          <div className="content-slider-item" key={slide.img}>
            <div className={`slider-svg-wrapper ${isDota(slide)}`}>
              <img src={slide.svg} alt="slide-logo"/>
            </div>
            <div className="slider-img-wrapper">
              <div style={{
                background: `url(${slide.img}) center`,
                backgroundSize: 'cover',
                height: '100%'
              }}
              />
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
}

export default HomePageContentSlider
