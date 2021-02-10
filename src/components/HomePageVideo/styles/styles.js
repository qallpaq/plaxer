import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
  root: {
    padding: '100px 0',
    [theme.breakpoints.down('xs')]: {
      padding: '40px 0',
    }
  },
  title: {
    fontSize: '40px',
    marginBottom: '20px',
    fontWeight: '600',
    lineHeight: '1',
    [theme.breakpoints.down('xs')]: {
      fontSize: '30px',
    }
  },
  subtitle: {
    marginBottom: '20px',
    fontWeight: '200',
  },
}))

export default useStyles
