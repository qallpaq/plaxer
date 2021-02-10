import { makeStyles } from '@material-ui/core'
import background from '../../../assets/images/parallax.jpg'


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    margin: '50px 0',
    height: '500px',
    position: 'relative',
    perspective: '1px',
    transformStyle: 'preserve-3d',
    overflowX: 'hidden',
    overflowY: 'hidden',
    [theme.breakpoints.down('sm')]: {
      margin: '20px auto',
      height: '100vh',
    },
    '&:before': {
      position: 'absolute',
      content: '""',
      top: '0',
      left: '0',
      bottom: '0',
      right: '0',
      backgroundImage: `url(${background})`,
      transform: 'translateZ(-.4px) scale(1.6)',
      backgroundAttachment: 'fixed',
      backgroundPosition: '35% 125%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }
  },
  title: {
    fontWeight: '700',
    textTransform: 'uppercase',
    fontSize: '40px',
    marginBottom: '20px',
    position: 'relative',
    zIndex: '0',
    '&::before': {
      position: 'absolute',
      top: '-20px',
      left: '-20px',
      content: '""',
      background: 'rgba(0, 0, 0, 0.6)',
      height: '80px',
      width: '200px',
      zIndex: '-1'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '30px',
    }
  },
  subtitle: {
    position: 'relative',
    marginBottom: '20px',
    width: '350px',
    fontSize: '18px',
    lineHeight: '1.33333',
    fontWeight: '500',
  },
}))

export default useStyles
