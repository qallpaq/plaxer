import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {
    AppBar,
    Tabs,
    Tab,
    Container,
    Typography
} from '@material-ui/core'
import TabPanel from './TabPanel'
import { ALL, CSGO, DOTA, FORTNITE, PUBG } from './constants'
import useStyles from './styles/styles'
import PropTypes from 'prop-types'


function a11yProps(index) {
    return {
        id: `simple-tab-${ index }`,
        'aria-controls': `simple-tabpanel-${ index }`,
    }
}

const teamsToJSX = (teams, key, index, value) => {
    const mapTeamsToProps = item => {
        return teams[item].map(item => {
            return <TabPanel index={ index }
                             value={ value }
                             item={ item }
                             key={ Math.random() * 100 }/>
        })
    }

    return key === ALL
        ? Object.keys(teams).map(key => mapTeamsToProps(key))
        : mapTeamsToProps(key)
}

teamsToJSX.propTypes = {
    teams: PropTypes.node,
    key: PropTypes.any.isRequired,
    index: PropTypes.any.isRequired,
    value: PropTypes.object.isRequired
}

const tabsHeaderToJSX = () => {
    const tabsHeader = [ ALL, DOTA, FORTNITE, PUBG, CSGO ]

    return tabsHeader.map((item, index) => {
        return <Tab style={ { textTransform: 'uppercase', minWidth: '100px' } }
                    label={ item }
                    key={ Math.random() * 100 }
                    { ...a11yProps(index) }/>
    })
}

const TabsComponent = () => {
    const classes = useStyles()

    const [ value, setValue ] = useState(0)
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const teams = useSelector(state => state.root.teams)

    return (
        <Container className={ classes.root }>
            <AppBar position="static"
                    className={ classes.bar }>

                <Typography className={ classes.title }>
                    Latest Matches
                </Typography>

                <Tabs value={ value }
                      onChange={ handleChange }
                      aria-label="tabs">
                    { tabsHeaderToJSX() }
                </Tabs>

            </AppBar>
            { teamsToJSX(teams, ALL, 0, value) }
            { teamsToJSX(teams, DOTA, 1, value) }
            { teamsToJSX(teams, FORTNITE, 2, value) }
            { teamsToJSX(teams, PUBG, 3, value) }
            { teamsToJSX(teams, CSGO, 4, value) }
        </Container>
    )
}

export default TabsComponent
