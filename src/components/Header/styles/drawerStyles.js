import { makeStyles } from '@material-ui/core/styles'


const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    width: drawerWidth,
    flexShrink: 0
  },
  mobileLink: {
    display: 'flex'
  },
  drawerPaper: {
    width: drawerWidth,
    background: '#101010'
  },
  link: {
    color: '#fff'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start'
  }
}))

export default useStyles
