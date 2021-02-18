import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  List,
  ListItem
} from '@material-ui/core'
import { useSelectorContext } from '../SelectorContext'
import useStyles from './styles/menuItemsStyles'


const MenuList = ({menuItems}) => {
  const classes = useStyles()

  const {currentPage} = useSelectorContext()

  const isActive = text => {
    return currentPage === text
      ? classes.active
      : ''
  }

  return (
    <List className={classes.root}>
      {menuItems.map(({link, text}) => (
        <ListItem className={classes.item} key={link}>
          <NavLink
            className={`${classes.text} ${isActive(text)}`}
            to={`${link}`}
          >
            {text}
          </NavLink>
        </ListItem>
      ))}
    </List>
  )
}

MenuList.propTypes = {
  menuItems: PropTypes.array.isRequired
}

export default MenuList
