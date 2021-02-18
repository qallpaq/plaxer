import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  text: {
    position: 'relative',
    fontFamily: 'Poppins, sans-serif',
    color: '#fff',
    '&:before': {
      content: '""',
      transition: '.2s',
      position: 'absolute',
      bottom: '-10px',
      left: '-10%',
      width: '0',
      height: '7px',
      transform: 'skew(-25deg)',
      background: theme.palette.primary.main
    },
    '&:hover&:before': {
      width: '120%',
      height: '7px',
      transform: 'skew(-25deg)'
    },
    '&$active&:before': {
      width: '120%'
    }
  },
  item: {
    display: 'flex'
  },
  active: {}
}))

export default useStyles
