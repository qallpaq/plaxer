import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import {
  Drawer,
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme
} from '@material-ui/core'
import useStyles from './styles/drawerStyles'


const MobileNavBar = ({open, menuItems, handleDrawerClose}) => {
  const theme = useTheme()
  const classes = useStyles()

  return (
    <Drawer
      className={classes.root}
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
            <NavLink className={classes.mobileLink} to={item.link}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text}/>
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

MobileNavBar.propTypes = {
  open: PropTypes.bool.isRequired,
  menuItems: PropTypes.array.isRequired,
  handleDrawerClose: PropTypes.func.isRequired
}

export default MobileNavBar
