import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
  root: {
    padding: '40px 0',
  },
  footer: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '25px'
    }
  },
  share: {
    color: theme.palette.primary.main,
    textTransform: 'uppercase',
    textAlign: 'center',
  }
}))

export default useStyles
