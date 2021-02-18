import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import Icons from '../Icons'
import team1 from '../../assets/images/team/gamer_1-min.jpg'
import team2 from '../../assets/images/team/gamer_2.jpeg'
import team3 from '../../assets/images/team/gamer_3-min.jpg'
import team4 from '../../assets/images/team/gamer_4-min.jpg'
import team5 from '../../assets/images/team/gamer_5-min.jpg'
import team6 from '../../assets/images/team/team_6.jpg'
import team7 from '../../assets/images/contentSlider/3.jpg'
import team8 from '../../assets/images/contentSlider/1.jpg'
import './styles/style.css'


const SliderItem = ({img, name}) => (
  <div className='team-slider__item'>
    <div
      className='team-slider__img'
      style={{
        background: `url(${img}) 70% 10%`,
        backgroundSize: 'cover'
      }}
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

const TeamSlider = () => {
  const items = [
    {
      img: team1,
      name: 'Jacombo Jr.'
    },
    {
      img: team2,
      name: 'Grigory Buryakov'
    },
    {
      img: team3,
      name: 'Black Panther'
    },
    {
      img: team4,
      name: 'Anonymous'
    },
    {
      img: team5,
      name: 'Dosya'
    },
    {
      img: team6,
      name: 'Yasama'
    },
    {
      img: team7,
      name: 'El Pablito'
    },
    {
      img: team8,
      name: 'Yasama Jr'
    }
  ]

  const settings = {
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 5,
    touchThreshold: 12,
    responsive: [
      {
        breakpoint: 1740,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 800,
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

  return (
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
}

export default TeamSlider
