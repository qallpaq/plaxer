import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  toolBar: {
    paddingLeft: '0',
    paddingRight: '0'
  },
  appBar: {
    transition: '.4s',
    background: background => background ? '#101010' : 'transparent',
    padding: '12px 0',
    boxShadow: 'none'
  },
  logoWrapper: {
    flexGrow: 1
  },
  logo: {
    width: '160px'
  },
  menu: {
    display: 'flex'
  },
  menuText: {
    position: 'relative',
    fontFamily: 'Poppins, sans-serif',
    '&:before': {
      content: '""',
      transition: '.2s',
      position: 'absolute',
      bottom: '-5px',
      width: '0',
      height: '3px',
      background: theme.palette.primary.main,
      borderRadius: '5px'
    },
    '&:hover&:before': {
      width: '100%',
      height: '3px'
    }
  },
  menuItem: {
    display: 'flex'
  },
  hide: {
    display: 'none'
  },
  link: {
    color: '#fff'
  }
}))

export default useStyles
