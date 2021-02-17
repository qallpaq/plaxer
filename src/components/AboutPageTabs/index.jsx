import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  AppBar,
  Tabs,
  Tab,
  Typography,
  Box
} from '@material-ui/core'
import Btn from '../Btn'
import { motion } from 'framer-motion'
import useStyles from './styles/styles'
import { slideIn } from './styles/animation'


function TabPanel(props) {
  const classes = useStyles()
  const {children, value, index, ...other} = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box className={classes.tabContent} p={3}>
          {children}
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

const AboutPageTabs = () => {
  const classes = useStyles()
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const TabPanelUpper = ({children}) => {
    return (
      <Typography
        className={classes.title}
        component={motion.h5}
        variants={slideIn(-500)}
        initial='hidden'
        animate='visible'
      >
        {children}
      </Typography>
    )
  }

  const TabPanelBottom = ({children}) => {
    return (
      <Typography
        className={classes.subtitle}
        component={motion.p}
        variants={slideIn(500)}
        initial='hidden'
        animate='visible'
      >
        {children}
      </Typography>
    )
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          className={classes.header}
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="About" {...a11yProps(0)} />
          <Tab label="Maxset" {...a11yProps(1)} />
          <Tab label="RHCP" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel
        className={classes.wrapper}
        value={value}
        index={0}
      >
        <TabPanelUpper>
          Just design & compose.
        </TabPanelUpper>
        <TabPanelBottom>
          We’re a design studio with more than 13 years of experience in branding and digital. Throughout these years,
          we re-discovered the essence of our clients. We create innovative digital products and future-orientes brands,
          Our premise is to always drive a positive change in people, companies and organizations.
        </TabPanelBottom>
        <div className={classes.btnWrapper}>
          <Btn text='Read more'/>
        </div>
      </TabPanel>
      <TabPanel
        className={classes.wrapper}
        value={value}
        index={1}
      >
        <TabPanelUpper>
          Gozzal Seni
        </TabPanelUpper>
        <TabPanelBottom>
          Görsem kaytąn kuşlar kervânın
          Esę düşer ýaşlık devrânım
          Özün canım, özün armânım
          Gel âzizim seni sağındım.

          Caną yakmaz salkın şemâller
          Gözü tartmaz arûğ cemâller
          Hoşą gelmez soğuk şemâller
          Göñlü çekmez güzel cemâller
          Murât etti ne bir yamanlar
          Men vârıbir seni sağındım
          Men hâkikaten seni özledim.

          Ötęn günden yıllar dizmeyin
          Kaybettim, bulamadan aradım
          Ancak senden ümit üzmedim
          Bir haber ver, seni sağındım
        </TabPanelBottom>
        <div className={classes.btnWrapper}>
          <Btn text='Read more'/>
        </div>
      </TabPanel>
      <TabPanel
        className={classes.wrapper}
        value={value}
        index={2}
      >
        <TabPanelUpper>
          Can't Stop
        </TabPanelUpper>
        <TabPanelBottom>
          Can't stop addicted to the shindig
          cop top he says I'm gonna win big
          choose not a life of imitation
          distant cousin to the reservation
          defunct the pistol that you pay for
          this punk the felling that you stay for
          in time I want to be your best friend
          Eastside love is living on the Westend
          knock out but boy you better come to
          don't die you know the truth is some do
          go write your message on the pavement
          burnin' so bright I wonder what the wave meant
        </TabPanelBottom>
        <div className={classes.btnWrapper}>
          <Btn text='Read more'/>
        </div>
      </TabPanel>
    </div>
  )
}

export default AboutPageTabs
