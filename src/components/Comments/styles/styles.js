import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '50px',
    width: '65%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    }
  },
  item: {
    display: 'flex',
    marginBottom: '20px',
    alignItems: 'center'
  },
  avatar: {
    width: '100px',
    height: '100px',
    fontSize: '35px',
    [theme.breakpoints.down('xs')]: {
      width: '70px',
      height: '70px',
      fontSize: '25px',
    }
  },
  content: {
    marginLeft: '20px'
  },
  title: {
    display: 'flex'
  },
  name: {
    fontSize: '18px',
    fontWeight: '700',
    padding: '5px'
  },
  date: {
    padding: '5px',
    color: theme.palette.primary.main,
    fontSize: '14px'
  },
  text: {
    padding: '5px',
    lineHeight: '2'
  }
}))

export default useStyles
