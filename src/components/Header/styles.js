import { makeStyles } from '@material-ui/core/styles'


const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    },
    toolBar: {
        paddingLeft: '0',
        paddingRight: '0',
    },
    appBar: {
        transition: theme.transitions.create([ 'margin', 'width' ], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        // backgroundColor: '#101010',
        background: 'transparent',
        padding: '12px 0',
        boxShadow: 'none',
    },
    appBarShift: {
        width: `calc(100% - ${ drawerWidth }px)`,
        transition: theme.transitions.create([ 'margin', 'width' ], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    },
    logoWrapper: {
        flexGrow: 1
    },
    logo: {
        width: '160px',
    },
    menu: {
        display: 'flex',
    },
    menuItem: {
        display: 'flex',
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginRight: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
    },
}))

export default useStyles
