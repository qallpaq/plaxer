import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
  root: props => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: `url(${props.image}) 50% 50%`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    height: '100vh',
    [theme.breakpoints.down('xs')]: {
      padding: '0 15px'
    }
  }),
  versus: {
    margin: 'auto 130px',
    fontSize: '45px',
    fontWeight: '700',
    [theme.breakpoints.down('sm')]: {
      margin: 'auto 30px',
      fontSize: '35px'
    },
    [theme.breakpoints.down('xs')]: {
      margin: 'auto 30px',
      fontSize: '20px'
    }
  }
}))

export default useStyles
