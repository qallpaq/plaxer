import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    background: theme.palette.success.light,
    padding: '30px 20px',
    right: '10%',
    top: '10%',
    zIndex: '5',
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      padding: '20px 10px'
    }
  },
  title: {
    fontSize: '30px',
    textTransform: 'uppercase',
    fontWeight: '700',
    [theme.breakpoints.down('xs')]: {
      fontSize: '20px'
    }
  }
}))

export default useStyles
