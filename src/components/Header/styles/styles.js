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
    transition: '.4s',
    background: background => background ? '#101010' : 'transparent',
    padding: '12px 0',
    boxShadow: 'none',
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
    background: 'linear-gradient(180deg, rgba(52,5,97,.95) 3%, rgba(28,44,82,1) 33%, rgba(21,17,77,.95) 100%)',
  },
  link: {
    color: '#fff',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
}))

export default useStyles
