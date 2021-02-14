import React, { useState } from 'react'
import {
  AppBar,
  Tabs,
  Container,
  Typography,
  Grid
} from '@material-ui/core'
import {
  ALL,
  CSGO,
  DOTA_2,
  FORTNITE,
  PUBG
} from '../../constants'
import { gameToJSX, tabsHeaderToJSX } from './tools'
import useStyles from './styles/styles'


const TabsComponent = ({Component, data, title = ''}) => {
  const classes = useStyles()

  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Container className={classes.root}>
      <AppBar className={classes.bar} position="static">
        <Typography className={classes.title} variant='h4'>
          {title}
        </Typography>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="tabs"
        >
          {tabsHeaderToJSX([ALL, DOTA_2, FORTNITE, PUBG, CSGO], classes.tab)}
        </Tabs>
      </AppBar>
      <Grid container spacing={4}>
        {gameToJSX(data, ALL, 0, value, Component)}
        {gameToJSX(data, DOTA_2, 1, value, Component)}
        {gameToJSX(data, FORTNITE, 2, value, Component)}
        {gameToJSX(data, PUBG, 3, value, Component)}
        {gameToJSX(data, CSGO, 4, value, Component)}
      </Grid>
    </Container>
  )
}

export default TabsComponent
