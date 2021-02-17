import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import clsx from 'clsx'
import MenuIcon from '@material-ui/icons/Menu'
import {
  AppBar,
  Toolbar,
  CssBaseline,
  List,
  IconButton,
  ListItem,
  Container,
  useMediaQuery,
  useTheme,
  Typography
} from '@material-ui/core'
import logo from '../../assets/images/logo.png'
import useStyles from './styles/styles'
import HomeIcon from '@material-ui/icons/Home'
import BookIcon from '@material-ui/icons/Book'
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual'
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar'
import MobileNavBar from './Drawer'


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
    {link: '/blog', text: 'Blog', icon: <BookIcon className={classes.link}/>},
    {link: '/about', text: 'About', icon: <PhotoSizeSelectActualIcon className={classes.link}/>},
    {link: '/contacts', text: 'Contacts', icon: <PermContactCalendarIcon className={classes.link}/>}
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
                      <Typography className={classes.menuText}>
                        {item.text}
                      </Typography>
                    </NavLink>
                  </ListItem>
                ))}
              </List>)}
          </Toolbar>
        </Container>
      </AppBar>
      <MobileNavBar
        open={open}
        menuItems={menuItems}
        handleDrawerClose={handleDrawerClose}
      />
    </div>
  )
}

export default Header
