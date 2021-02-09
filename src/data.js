import { teamCreator } from './helpers'
import dragons from './assets/images/home-page-tabs/dragons.png'
import gdev from './assets/images/home-page-tabs/gdev.png'
import gerto from './assets/images/home-page-tabs/gerto.png'
import golin from './assets/images/home-page-tabs/golin.png'
import gruv from './assets/images/home-page-tabs/gruv.png'
import s from './assets/images/home-page-tabs/s.png'
import { CSGO, DOTA_2, FORTNITE, PUBG } from './components/Tabs/constants'


const teams = [
    {
        team1: teamCreator('dragons', 193, dragons, 1, true),
        team2: teamCreator('gdev', 124, gdev, 2, false),
        title: DOTA_2,
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
    },
]

export default teams
