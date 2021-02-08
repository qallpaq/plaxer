import React from 'react'
import { NavLink } from 'react-router-dom'
import clsx from 'clsx'
import { useTheme } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'
import useMediaQuery from '@material-ui/core/useMediaQuery'
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
} from '@material-ui/core'
import useStyles from './styles'
import logo from '../../assets/images/logo.png'


const Header = () => {
    const classes = useStyles()
    const theme = useTheme()
    const [ open, setOpen ] = React.useState(false)
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    const handleDrawerOpen = () => {
        setOpen(true)
    }

    const handleDrawerClose = () => {
        setOpen(false)
    }

    const menuItems = [
        { link: '/', text: 'Home' },
        { link: '/1', text: '1' },
        { link: '/2', text: '2' },
    ]

    return (
        <div className={ classes.root }>
            <CssBaseline/>
            <AppBar position="fixed"
                    className={ clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    }) }>
                <Container>
                    <Toolbar className={ classes.toolBar }>
                        <div className={ classes.logoWrapper }>
                            <img className={ classes.logo }
                                 src={ logo }
                                 alt="logo"/>
                        </div>

                        { isMobile
                            ? (<IconButton color="inherit"
                                           aria-label="open drawer"
                                           edge="end"
                                           onClick={ handleDrawerOpen }
                                           className={ clsx(open && classes.hide) }>
                                <MenuIcon/>
                            </IconButton>)

                            : (<List className={ classes.menu }>
                                { menuItems.map(item => (
                                    <ListItem className={ classes.menuItem } key={ item.link }>
                                        <NavLink to={ `${ item.link }` }>
                                            <ListItemText primary={ item.text }/>
                                        </NavLink>
                                    </ListItem>
                                )) }
                            </List>) }
                    </Toolbar>
                </Container>
            </AppBar>
            <Drawer className={ classes.drawer }
                    variant="persistent"
                    anchor="right"
                    open={ open }
                    classes={ { paper: classes.drawerPaper } }>

                <div className={ classes.drawerHeader }>
                    <IconButton onClick={ handleDrawerClose }>
                        { theme.direction === 'rtl' ? <ChevronLeftIcon/> : <ChevronRightIcon/> }
                    </IconButton>
                </div>
                <Divider/>
                <List>
                    { [ 'Inbox', 'Starred', 'Send email', 'Drafts' ].map((text, index) => (
                        <ListItem button key={ text }>
                            <ListItemIcon>{ index % 2 === 0 ? <InboxIcon/> : <MailIcon/> }</ListItemIcon>
                            <ListItemText primary={ text }/>
                        </ListItem>
                    )) }
                </List>
                <Divider/>
                <List>
                    { [ 'All mail', 'Trash', 'Spam' ].map((text, index) => (
                        <ListItem button key={ text }>
                            <ListItemIcon>{ index % 2 === 0 ? <InboxIcon/> : <MailIcon/> }</ListItemIcon>
                            <ListItemText primary={ text }/>
                        </ListItem>
                    )) }
                </List>
            </Drawer>
        </div>
    )
}

export default Header
