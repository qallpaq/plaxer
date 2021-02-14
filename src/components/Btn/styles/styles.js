import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    background: 'transparent',
    '&:before': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      right: 0,
      background: theme.palette.primary.main,
      width: '50px',
      height: '7px',
      transition: '.2s',
      zIndex: 1,
      transform: 'skew(-35deg)'
    },
    '&:hover&:before': {
      width: '100%',
      height: '100%',
      transform: 'skew(-25deg)'
    },
    '&:active': {
      background: 'none'
    }
  },
  text: {
    position: 'relative',
    zIndex: 2,
    fontWeight: 800,
    fontSize: '14px'
  }
}))

export default useStyles
