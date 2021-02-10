import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import clsx from 'clsx'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import {
  Drawer,
  AppBar,
  Toolbar,
  CssBaseline,
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
  useMediaQuery,
  useTheme
} from '@material-ui/core'
import logo from '../../assets/images/logo.png'
import useStyles from './styles/styles'
import HomeIcon from '@material-ui/icons/Home'
import BookIcon from '@material-ui/icons/Book'
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual'
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar'
import InfoIcon from '@material-ui/icons/Info'


const Header = () => {
  const [background, setBackground] = useState(false)
  const handleScrollChange = () => {
    if (window.pageYOffset > 0) {
      setBackground(true)
    } else {
      setBackground(false)
    }
  }

  const [open, setOpen] = useState(false)
  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  const classes = useStyles(background)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  useEffect(() => {
    document.addEventListener('scroll', handleScrollChange)

    return () => document.removeEventListener('scroll', handleScrollChange)
  }, [])

  const menuItems = [
    {link: '/', text: 'Home', icon: <HomeIcon className={classes.link}/>},
    {link: '/1', text: 'Blog', icon: <BookIcon className={classes.link}/>},
    {link: '/2', text: 'Gallery', icon: <PhotoSizeSelectActualIcon className={classes.link}/>},
    {link: '/3', text: 'Contacts', icon: <PermContactCalendarIcon className={classes.link}/>},
    {link: '/4', text: 'About', icon: <InfoIcon className={classes.link}/>},
  ]

  return (
    <div className={classes.root}>
      <CssBaseline/>
      <AppBar
        position="fixed"
        className={classes.appBar}
      >
        <Container>
          <Toolbar className={classes.toolBar}>
            <div className={classes.logoWrapper}>
              <img
                className={classes.logo}
                src={logo}
                alt="logo"
              />
            </div>
            {isMobile
              ? (<IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerOpen}
                className={clsx(open && classes.hide)}
              >
                <MenuIcon/>
              </IconButton>)

              : (<List className={classes.menu}>
                {menuItems.map(item => (
                  <ListItem className={classes.menuItem} key={item.link}>
                    <NavLink to={`${item.link}`}>
                      <ListItemText primary={item.text}/>
                    </NavLink>
                  </ListItem>
                ))}
              </List>)}
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{paper: classes.drawerPaper}}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl'
              ? <ChevronLeftIcon className={classes.link}/>
              : <ChevronRightIcon className={classes.link}/>}
          </IconButton>
        </div>
        <Divider/>
        <List>
          {menuItems.map(item => (
            <ListItem button key={item.link}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text}/>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  )
}

export default Header
