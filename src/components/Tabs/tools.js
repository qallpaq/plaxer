import React from 'react'
import TabPanel from './TabPanel'
import { Tab } from '@material-ui/core'
import { ALL } from '../../constants'


const gameToJSX = (teams, key, index, value) => {
  const mapTeamToProps = obj => {
    return (
      <TabPanel
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
      'aria-controls': `simple-tabpanel-${index}`,
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

export {
  gameToJSX,
  tabsHeaderToJSX
}
