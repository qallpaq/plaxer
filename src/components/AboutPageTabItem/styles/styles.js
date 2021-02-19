import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '240px',
    width: '100%',
    background: '#110719',
    borderBottom: '1px solid #413b49',
    fontFamily: 'Poppins',
    padding: '20px',
    marginBottom: '8px',
    transition: '.2s',
    '&:hover': {
      background: '#002357'
    }
  },
  text: {
    height: '100%',
    paddingLeft: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '20px'
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      textAlign: 'center',
      margin: '10px auto',
      paddingLeft: '0'
    }
  },
  title: {
    fontSize: '20px',
    textTransform: 'uppercase',
    fontWeight: '600',
    fontFamily: 'Poppins',
    cursor: 'pointer',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      fontSize: '16px'
    }
  },
  date: {
    textTransform: 'uppercase',
    fontSize: '14px',
    fontWeight: '600',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginBottom: '10px'
    }
  },
  stream: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center'
    }
  },
  twitch: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '14px',
    fontWeight: '600',
    width: 'auto'
  },
  twitchLogo: {
    height: '20px',
    width: 'auto',
    cursor: 'pointer',
    marginRight: '5px'
  },
  img: {
    width: '100%',
    height: '100%'
  }
}))

export default useStyles
