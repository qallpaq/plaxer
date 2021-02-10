import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
  root: {
    margin: '10px auto',
    background: 'transparent',
    minHeight: '150px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    textAlign: 'center',
  },
  media: {
    height: '50px',
    width: '50px',
  },
  content: {
    [theme.breakpoints.down('xs')]: {
      padding: 0,
    }
  },
  number: {
    color: '#fff',
    fontSize: '40px',
    fontWeight: '800',
    marginBottom: '10px',
    fontFamily: 'Poppins',
    [theme.breakpoints.down('xs')]: {
      fontSize: '25px'
    }
  },
  text: {
    textTransform: 'uppercase',
    color: '#fff',
    fontWeight: '600',
  },
}))

export default useStyles
