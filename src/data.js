import { teamCreator } from './helpers'
import dragons from './assets/images/home-page-tabs/dragons.png'
import gdev from './assets/images/home-page-tabs/gdev.png'
import gerto from './assets/images/home-page-tabs/gerto.png'
import golin from './assets/images/home-page-tabs/golin.png'
import gruv from './assets/images/home-page-tabs/gruv.png'
import s from './assets/images/home-page-tabs/s.png'
import { CSGO, DOTA_2, FORTNITE, PUBG } from './constants'
import one from './assets/images/footerSlider/1.jpg'
import two from './assets/images/footerSlider/2.jpg'
import three from './assets/images/footerSlider/3.jpg'
import four from './assets/images/footerSlider/4.jpg'
import five from './assets/images/footerSlider/5.jpg'
import six from './assets/images/footerSlider/6.jpg'
import seven from './assets/images/footerSlider/7.jpg'
import eight from './assets/images/footerSlider/8.jpg'
import nine from './assets/images/footerSlider/9.jpg'
import ten from './assets/images/footerSlider/10.jpg'
import eleven from './assets/images/footerSlider/11.jpg'
import twelve from './assets/images/footerSlider/12.jpg'
import thirteen from './assets/images/contentSlider/1.jpg'
import fourteen from './assets/images/contentSlider/2.jpg'
import fifteen from './assets/images/contentSlider/3.jpg'
import sixteen from './assets/images/contentSlider/4.jpg'
import seventeen from './assets/images/contentSlider/5.jpg'
import bg from './assets/images/bg.jpg'
import bg1 from './assets/images/bg1.jpg'
import bg2 from './assets/images/bg2.jpg'


const games = [
  {
    team1: teamCreator('dragons', 193, dragons, 1, true),
    team2: teamCreator('gdev', 124, gdev, 2, false),
    title: DOTA_2
  },
  {
    team1: teamCreator('gerto', 193, gerto, 3, false),
    team2: teamCreator('golin', 184, golin, 4, true),
    title: DOTA_2
  },
  {
    team1: teamCreator('gruv', 101, gruv, 5, false),
    team2: teamCreator('s', 172, s, 6, true),
    title: CSGO
  },
  {
    team1: teamCreator('dragons', 172, dragons, 7, true),
    team2: teamCreator('gdev', 108, gdev, 8, false),
    title: CSGO
  },
  {
    team1: teamCreator('gerto', 177, gerto, 9, true),
    team2: teamCreator('golin', 132, golin, 10, false),
    title: CSGO
  },
  {
    team1: teamCreator('gruv', 69, gruv, 11, false),
    team2: teamCreator('s', 182, s, 12, true),
    title: PUBG
  },
  {
    team1: teamCreator('dragons', 185, dragons, 13, false),
    team2: teamCreator('gdev', 172, gdev, 14, true),
    title: PUBG
  },
  {
    team1: teamCreator('gerto', 177, gerto, 15, true),
    team2: teamCreator('golin', 132, golin, 16, false),
    title: FORTNITE
  }
]

const blogTabs = [
  {
    text: 'Streamlining the Path to Conversion',
    img: one, date: 'April 22, 2020',
    title: CSGO,
    id: 1
  },
  {
    text: 'Designing for the Web in 2019',
    img: two, date: 'April 22, 2020',
    title: CSGO,
    id: 2
  },
  {
    text: 'An Impactful Site  is More Than Just  Good Design.',
    img: three, date: 'April 22, 2020',
    title: CSGO,
    id: 3
  },
  {
    text: 'Driving Engagement  Online',
    img: four, date: 'April 22, 2020',
    title: CSGO,
    id: 4
  },
  {
    text: 'The Art & Science of  Colors and Their  Influence on Users',
    img: five, date: 'April 22, 2020',
    title: DOTA_2,
    id: 5
  },
  {
    text: 'SEO Tips for the  Contractor and  Remodeling Industry',
    img: six, date: 'April 22, 2020',
    title: DOTA_2,
    id: 6
  },
  {
    text: 'Great Web Design is  More Important than  Ever Before',
    img: seven, date: 'April 22, 2020',
    title: DOTA_2,
    id: 7
  },
  {
    text: 'Key Factors for  Impactful Web  Design',
    img: eight, date: 'April 22, 2020',
    title: DOTA_2,
    id: 8
  },
  {
    text: 'Power',
    img: nine, date: 'April 22, 2020',
    title: PUBG,
    id: 9
  },
  {
    text: 'Radioactive',
    img: ten, date: 'April 22, 2020',
    title: PUBG,
    id: 10
  },
  {
    text: 'Give In To Me',
    img: eleven, date: 'April 22, 2020',
    title: PUBG,
    id: 11
  },
  {
    text: 'Somebody To Love',
    img: twelve, date: 'April 22, 2020',
    title: FORTNITE,
    id: 12
  },
  {
    text: 'Take It Out On Me',
    img: thirteen, date: 'April 22, 2020',
    title: FORTNITE,
    id: 13
  },
  {
    text: 'Paradise',
    img: fourteen, date: 'April 22, 2020',
    title: FORTNITE,
    id: 14
  },
  {
    text: 'Videotape',
    img: fifteen, date: 'April 22, 2020',
    title: FORTNITE,
    id: 15
  }, {
    text: 'Diamond Hard',
    img: sixteen, date: 'April 22, 2020',
    title: PUBG,
    id: 16
  },
  {
    text: 'Clout',
    img: seventeen, date: 'April 22, 2020',
    title: PUBG,
    id: 17
  },
  {
    text: 'Jerome',
    img: bg, date: 'April 22, 2020',
    title: CSGO,
    id: 18
  },
  {
    text: 'Tokyo Snow Trip',
    img: bg2, date: 'April 22, 2020',
    title: DOTA_2,
    id: 19
  },
  {
    text: 'Jacombo',
    img: bg1, date: 'April 22, 2020',
    title: DOTA_2,
    id: 20
  }
]

export { games, blogTabs }
