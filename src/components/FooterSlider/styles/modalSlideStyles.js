import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
  root: {
    zIndex: 1101,
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    cursor: 'pointer',
    transition: '.2s',
    background: 'rgba(26, 14, 14, .8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      height: '70vh',
      width: '90vw'
    }
  },
  img: {
    height: '90%',
    width: '80%'
  }
}))

export default useStyles
