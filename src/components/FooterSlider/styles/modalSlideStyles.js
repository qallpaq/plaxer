import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles({
  root: {
    zIndex: 2,
    position: 'fixed',
    width: '70vw',
    height: '80vh',
    top: '55%',
    left: '50%',
    transform: 'translate(-50%, -55%)',
    cursor: 'pointer'
  },
  img: {
    height: '100%',
    width: '100%'
  }
})

export default useStyles
