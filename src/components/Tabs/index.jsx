import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  AppBar,
  Tabs,
  Container,
  Typography,
  Grid,
  Tab
} from '@material-ui/core'
import {
  ALL,
  CSGO,
  DOTA_2,
  FORTNITE,
  PUBG
} from '../../constants'
import useStyles from './styles/styles'


const gameToJSX = (teams, key, index, value, Component) => {
  const mapTeamToProps = obj => {
    return (
      <Component
        index={index}
        value={value}
        key={Math.random() * 100}
        item={obj}
      />
    )
  }

  return key === ALL
    ? teams.map(mapTeamToProps)
    : teams.filter(item => item.title === key)
      .map(mapTeamToProps)
}

const tabsHeaderToJSX = (tabsHeader, classes) => {
  const a11yProps = index => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`
    }
  }

  return tabsHeader.map((item, index) => {
    return (
      <Tab
        className={classes}
        label={item}
        key={Math.random() * 100}
        {...a11yProps(index)}
      />
    )
  })
}

const TabsComponent = ({Component, data, title = ''}) => {
  const classes = useStyles()

  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Container>
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

TabsComponent.propTypes = {
  Component: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  title: PropTypes.string,
}

export default TabsComponent
