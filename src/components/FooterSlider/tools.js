import one from '../../assets/images/footerSlider/1.jpg'
import two from '../../assets/images/footerSlider/2.jpg'
import three from '../../assets/images/footerSlider/3.jpg'
import four from '../../assets/images/footerSlider/4.jpg'
import five from '../../assets/images/footerSlider/5.jpg'
import six from '../../assets/images/footerSlider/6.jpg'
import seven from '../../assets/images/footerSlider/7.jpg'
import eight from '../../assets/images/footerSlider/8.jpg'
import nine from '../../assets/images/footerSlider/9.jpg'
import ten from '../../assets/images/footerSlider/10.jpg'
import eleven from '../../assets/images/footerSlider/11.jpg'
import twelve from '../../assets/images/footerSlider/12.jpg'
import bg from '../../assets/images/bg.jpg'
import bg1 from '../../assets/images/bg1.jpg'
import bg2 from '../../assets/images/bg2.jpg'


const slides = [
  one, two, three,
  four, five, six,
  seven, eight, nine,
  ten, eleven, twelve,
  bg, bg1, bg2
]

const settings = {
  infinite: true,
  swipeToSlide: true,
  slidesToShow: 7,
  touchThreshold: 12,
  dots: false,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 6
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 3
      }
    }
  ]
}

export { slides, settings }
