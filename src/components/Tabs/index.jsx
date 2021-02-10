import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {
  AppBar,
  Tabs,
  Container,
  Typography,
} from '@material-ui/core'
import { gameToJSX, tabsHeaderToJSX } from './tools'
import {
  ALL,
  CSGO,
  DOTA_2,
  FORTNITE,
  PUBG,
} from '../../constants'
import useStyles from './styles/styles'


const TabsComponent = () => {
  const games = useSelector(state => state.root.games)
  const classes = useStyles()

  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Container className={classes.root}>
      <AppBar className={classes.bar} position="static">
        <Typography className={classes.title} variant='h4'>
          Latest matches
        </Typography>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="tabs"
        >
          {tabsHeaderToJSX([ALL, DOTA_2, FORTNITE, PUBG, CSGO], classes.tab)}
        </Tabs>
      </AppBar>
      {gameToJSX(games, ALL, 0, value)}
      {gameToJSX(games, DOTA_2, 1, value)}
      {gameToJSX(games, FORTNITE, 2, value)}
      {gameToJSX(games, PUBG, 3, value)}
      {gameToJSX(games, CSGO, 4, value)}
    </Container>
  )
}

export default TabsComponent
