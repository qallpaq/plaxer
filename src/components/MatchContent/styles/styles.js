import { makeStyles } from '@material-ui/core'


const margin = '25px'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '70px'
  },
  suptitle: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: margin
  },
  date: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '12px'
  },
  hash: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '12px',
    fontWeight: '700'
  },
  title: {
    fontSize: '35px',
    marginBottom: margin,
    fontWeight: '700',
    [theme.breakpoints.down('xs')]: {
      fontSize: '25px'
    }
  },
  text: {
    marginBottom: '20px',
    lineHeight: '1.6',
    fontWeight: '600'
  },
  commentsTitle: {
    margin: '20px auto',
    fontSize: '34px'
  }
}))

export default useStyles
