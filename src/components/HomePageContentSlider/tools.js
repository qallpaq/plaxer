import csgo from '../../assets/images/contentSlider/1.jpg'
import csgoLogo from '../../assets/images/contentSlider/logos/csgo.svg'
import dota from '../../assets/images/contentSlider/2.jpg'
import dotaLogo from '../../assets/images/contentSlider/logos/dota-2.svg'
import pubg from '../../assets/images/contentSlider/3.jpg'
import pubgLogo from '../../assets/images/contentSlider/logos/pubg.svg'
import csgo2 from '../../assets/images/contentSlider/4.jpg'
import fortnite from '../../assets/images/contentSlider/5.jpg'
import fortniteLogo from '../../assets/images/contentSlider/logos/fortnite.svg'


const items = [
  {img: csgo, svg: csgoLogo},
  {img: dota, svg: dotaLogo},
  {img: pubg, svg: pubgLogo},
  {img: csgo2, svg: csgoLogo},
  {img: fortnite, svg: fortniteLogo},
]

const settings = {
  lazyLoad: 'ondemand',
  infinite: true,
  swipeToSlide: true,
  slidesToShow: 4,
  touchThreshold: 12,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
      }
    },
  ]
}

const isDota = slide => slide.svg === dotaLogo ? 'slider-svg-wrapper_dota' : ''

export {
  items,
  settings,
  isDota
}
