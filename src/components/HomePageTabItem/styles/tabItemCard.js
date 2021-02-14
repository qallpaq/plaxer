import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles({
  root: {
    position: 'relative',
    textAlign: 'center',
    width: '40%',
    padding: '10px',
    background: 'rgba(9, 6, 17, 0.7)',
  },
  mediaWrapper: {
    height: '80px',
  },
  media: {
    backgroundSize: 'contain',
    height: '100%',
  },
  content: {
    padding: '0',
  },
  title: {
    textTransform: 'uppercase',
    fontSize: '18px',
  },
  number: {
    fontSize: '18px',
  },
  winner: {
    position: 'absolute',
    top: 0,
    left: 0,
    background: '#904315',
    fontFamily: 'Poppins',
    fontSize: '12px',
    fontWeight: '500',
    padding: '0 5px',
  }
})

export default useStyles
