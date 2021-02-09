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
import { ALL, CSGO, DOTA_2, FORTNITE, PUBG } from './constants'
import useStyles from './styles/styles'


const teamsToJSX = (teams, key, index, value) => {
    const mapTeamToProps = obj => {
        return <TabPanel index={ index }
                         value={ value }
                         key={ Math.random() * 100 }
                         item={ obj }/>
    }

    return key === ALL
        ? teams.map(mapTeamToProps)
        : teams.filter(item => item.title === key)
            .map(mapTeamToProps)
}

const TabsComponent = () => {
    const teams = useSelector(state => state.root.teams)
    const classes = useStyles()

    const [ value, setValue ] = useState(0)
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const tabsHeaderToJSX = () => {
        function a11yProps(index) {
            return {
                id: `simple-tab-${ index }`,
                'aria-controls': `simple-tabpanel-${ index }`,
            }
        }

        const tabsHeader = [ ALL, DOTA_2, FORTNITE, PUBG, CSGO ]

        return tabsHeader.map((item, index) => {
            return <Tab className={ classes.tab }
                        label={ item }
                        key={ Math.random() * 100 }
                        { ...a11yProps(index) }/>
        })
    }

    return (
        <Container className={ classes.root }>
            <AppBar position="static"
                    className={ classes.bar }>

                <Typography className={ classes.title } variant='h4'>
                    Latest matches
                </Typography>

                <Tabs value={ value }
                      onChange={ handleChange }
                      aria-label="tabs">
                    { tabsHeaderToJSX() }
                </Tabs>

            </AppBar>
            { teamsToJSX(teams, ALL, 0, value) }
            { teamsToJSX(teams, DOTA_2, 1, value) }
            { teamsToJSX(teams, FORTNITE, 2, value) }
            { teamsToJSX(teams, PUBG, 3, value) }
            { teamsToJSX(teams, CSGO, 4, value) }
        </Container>
    )
}

export default TabsComponent
