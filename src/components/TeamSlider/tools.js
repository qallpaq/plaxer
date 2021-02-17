import team1 from '../../assets/images/team/gamer_1-min.jpg'
import team2 from '../../assets/images/team/gamer_2.jpeg'
import team3 from '../../assets/images/team/gamer_3-min.jpg'
import team4 from '../../assets/images/team/gamer_4-min.jpg'
import team5 from '../../assets/images/team/gamer_5-min.jpg'
import team6 from '../../assets/images/team/team_6.jpg'
import team7 from '../../assets/images/contentSlider/3.jpg'
import team8 from '../../assets/images/contentSlider/1.jpg'


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

export { settings, items }
