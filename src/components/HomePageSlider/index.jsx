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

const HomePageSlider = () => {
  const items = [
    {
      number: '1',
      text1: 'Games with idea &',
      text2: 'memorable design.'
    },
    {
      number: '2',
      text1: 'The New Game &',
      text2: 'awesome concept.'
    },
    {
      number: '3',
      text1: 'Play with us in',
      text2: 'the all new games.'
    }
  ]

  const dotsStyles = {
    root: {borderRadius: '10px', padding: '10px'},
    list: {
      margin: '0px',
      width: '130px',
      paddingInlineStart: '0',
      display: 'flex',
      justifyContent: 'space-between'
    },
    item: {
      width: '40px',
      color: 'white',
      background: '#0750d0'
    }
  }

  const SampleArrow = () => <div style={{display: 'none'}}/>

  const createDots = dots => {
    return (
      <div style={dotsStyles.root}>
        <Container>
          <ul style={dotsStyles.list}>
            {dots}
          </ul>
        </Container>
      </div>
    )
  }

  const settings = {
    dots: true,
    swipe: false,
    infinite: true,
    speed: 600,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    nextArrow: <SampleArrow/>,
    prevArrow: <SampleArrow/>,
    appendDots: createDots,
    customPaging: i => (
      <div style={dotsStyles.item}>
        0{i + 1}
      </div>
    )
  }

  return (
    <>
      <div className="home-page__icons">
        <Icons flexDirection='column'/>
      </div>
      <Slider {...settings}>
        {items.map(slide => <CreateSlide {...slide} key={slide.number}/>)}
      </Slider>
    </>
  )
}

export default HomePageSlider
