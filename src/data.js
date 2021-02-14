import { teamCreator } from './helpers'
import dragons from './assets/images/home-page-tabs/dragons.png'
import gdev from './assets/images/home-page-tabs/gdev.png'
import gerto from './assets/images/home-page-tabs/gerto.png'
import golin from './assets/images/home-page-tabs/golin.png'
import gruv from './assets/images/home-page-tabs/gruv.png'
import s from './assets/images/home-page-tabs/s.png'
import { CSGO, DOTA_2, FORTNITE, PUBG } from './constants'

import cs1 from './assets/images/csgo/csgo_1-min.jpg'
import cs2 from './assets/images/csgo/csgo_2-min.jpg'
import cs3 from './assets/images/csgo/csgo_3-min.jpg'
import cs4 from './assets/images/csgo/csgo_4-min.jpg'
import cs5 from './assets/images/csgo/csgo_5-min.jpg'

import dota1 from './assets/images/dota/dota_1-min.jpg'
import dota2 from './assets/images/dota/dota_2-min.jpg'
import dota3 from './assets/images/dota/dota_3-min.jpg'
import dota4 from './assets/images/dota/dota_4-min.jpg'
import dota5 from './assets/images/dota/dota_5-min.jpeg'

import pubg1 from './assets/images/pubg/pubg_1-min.jpg'
import pubg2 from './assets/images/pubg/pubg_2-min.jpg'
import pubg3 from './assets/images/pubg/pubg_3-min.jpg'
import pubg4 from './assets/images/pubg/pubg_4-min.jpg'
import pubg5 from './assets/images/pubg/pubg_5-min.jpg'

import fortnite1 from './assets/images/fortnite/fortnite_1-min.jpg'
import fortnite2 from './assets/images/fortnite/fortnite_2-min.jpg'
import fortnite3 from './assets/images/fortnite/fortnite_3-min.jpg'
import fortnite4 from './assets/images/fortnite/fortnite_4.png'
import fortnite5 from './assets/images/fortnite/fortnite_5-min.jpg'


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
    text: 'Tactics in CS GO',
    img: cs1, date: 'April 22, 2020',
    title: CSGO,
    id: 1
  },
  {
    text: 'I Take The Mid',
    img: cs2, date: 'April 22, 2020',
    title: CSGO,
    id: 2
  },
  {
    text: 'Why Important to be Global?',
    img: cs3, date: 'April 22, 2020',
    title: CSGO,
    id: 3
  },
  {
    text: 'How We Start',
    img: cs4, date: 'April 26, 2020',
    title: CSGO,
    id: 4
  },
  {
    text: 'The Art & Science of Players',
    img: cs5, date: 'April 2, 2020',
    title: CSGO,
    id: 5
  },
  {
    text: 'Juggernaut is`s EZPZ',
    img: dota1, date: 'May 28, 2020',
    title: DOTA_2,
    id: 6
  },
  {
    text: 'Great Web Design is  More Important than  Ever Before',
    img: dota2, date: 'April 29, 2020',
    title: DOTA_2,
    id: 7
  },
  {
    text: 'Key Factors for  Impactful Web  Design',
    img: dota3, date: 'April 14, 2020',
    title: DOTA_2,
    id: 8
  },
  {
    text: 'Give it Away NOW',
    img: dota4, date: 'April 18, 2020',
    title: DOTA_2,
    id: 9
  },
  {
    text: 'Toxic Players after 25 Minutes',
    img: dota5, date: 'April 19, 2020',
    title: DOTA_2,
    id: 10
  },
  {
    text: 'Give In To Me',
    img: pubg1, date: 'April 3, 2020',
    title: PUBG,
    id: 11
  },
  {
    text: 'Somebody To Love',
    img: pubg2, date: 'April 2, 2020',
    title: PUBG,
    id: 12
  },
  {
    text: 'Take It Out On Me',
    img: pubg3, date: 'April 22, 2020',
    title: PUBG,
    id: 13
  },
  {
    text: 'Paradise',
    img: pubg4, date: 'April 23, 2020',
    title: PUBG,
    id: 14
  },
  {
    text: 'Videotape',
    img: pubg5, date: 'April 29, 2020',
    title: PUBG,
    id: 15
  }, {
    text: 'Diamond Hard',
    img: fortnite1, date: 'April 14, 2020',
    title: FORTNITE,
    id: 16
  },
  {
    text: 'Play With Friends',
    img: fortnite2, date: 'April 18, 2020',
    title: FORTNITE,
    id: 17
  },
  {
    text: 'Game 50x50',
    img: fortnite3, date: 'April 13, 2020',
    title: FORTNITE,
    id: 18
  },
  {
    text: 'Tokyo Snow Trip',
    img: fortnite4, date: 'April 7, 2020',
    title: FORTNITE,
    id: 19
  },
  {
    text: 'Jacombo',
    img: fortnite5, date: 'April 2, 2020',
    title: FORTNITE,
    id: 20
  }
]

export { games, blogTabs }
