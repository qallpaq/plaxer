import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
  title: {
    fontSize: '16px',
    marginBottom: '30px',
    fontWeight: '700',
    fontFamily: 'Raleway'
  },
  text: {
    fontSize: '13px',
    fontWeight: '600',
    marginBottom: '8px'
  },
  name: {
    opacity: '.7',
  },
  icon: {
    margin: '0 -3px',
    color: '#fff',
    transition: '.2s',
    '&:hover': {
      color: theme.palette.primary.main
    }
  }
}))

export default useStyles
