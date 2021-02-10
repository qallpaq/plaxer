import React from 'react'
import { Container } from '@material-ui/core'


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
  },
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
  lazyLoad: 'ondemand',
  dots: true,
  swipe: false,
  infinite: true,
  speed: 600,
  pauseOnHover: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleArrow/>,
  prevArrow: <SampleArrow/>,
  appendDots: createDots,
  customPaging: i => (
    <div style={dotsStyles.item}>
      0{i + 1}
    </div>
  )
}

export { settings, items }
