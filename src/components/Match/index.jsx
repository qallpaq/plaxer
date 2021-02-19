import React from 'react'
import {
  Typography,
  useMediaQuery,
  useTheme
} from '@material-ui/core'
import Page from '../Page'
import { useSelectorContext } from '../SelectorContext'
import TabItemCard from '../HomePageTabItem/TabItemCard'
import MatchContent from './MatchContent'
import dota from '../../assets/images/match/608636.jpg'
import csgo from '../../assets/images/match/match_csgo-min.jpg'
import pubg from '../../assets/images/match/match_pubg-min.jpg'
import fortnite from '../../assets/images/match/match_fortnite-min.png'
import useStyles from './styles/styles'


const Match = ({match}) => {
  const id = match.params.id
  const {gamesTabs} = useSelectorContext()
  const game = gamesTabs.find(game => game.id === +id)
  const {team1, team2} = game

  const backgrounds = {dota, csgo, fortnite, pubg}

  const key = game.title.toLowerCase().split(' ')[0]
  const image = backgrounds[key]

  const classes = useStyles({image})

  const theme = useTheme()
  const isSM = useMediaQuery(theme.breakpoints.down('sm'))

  const styles = {
    width: isSM ? '150px' : '255px',
    height: isSM ? '200px' : '350px',
    display: 'flex'
  }

  const fontStyles = {
    fontSize: isSM ? '20px' : '30px',
    fontWeight: 'bold'
  }

  return (
    <Page styled={false} page='Home'>
      <div className={classes.root}>
        <TabItemCard
          styles={styles}
          fontStyles={fontStyles}
          win={team1.win}
          number={team1.number}
          img={team1.img}
          name={team1.name}
        />
        <Typography className={classes.versus}>VS</Typography>
        <TabItemCard
          styles={styles}
          fontStyles={fontStyles}
          win={team2.win}
          number={team2.number}
          img={team2.img}
          name={team2.name}
        />
      </div>
      <MatchContent game={game}/>
    </Page>
  )
}

export default Match
