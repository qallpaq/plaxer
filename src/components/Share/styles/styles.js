import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
  root: {
    padding: '50px',
    width: '100%'
  },
  title: {
    marginBottom: '15px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '25px'
    }
  },
  share: {
    color: theme.palette.primary.main,
    textTransform: 'uppercase',
    textAlign: 'center'
  },
  subtitle: {
    fontWeight: '700',
    textAlign: 'center'
  },
  name: {
    opacity: .7,
    transition: '.2s',
    color: '#fff',
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.primary.main
    }
  }
}))

export default useStyles
