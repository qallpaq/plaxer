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
    alignItems: 'center'
  },
  img: props => ({
    background: `url(${props.currentModalSlide}) 50% 50%`,
    backgroundSize: 'cover',
    height: '90%',
    width: '80%',
    [theme.breakpoints.down('xs')]: {
      height: '70vh',
      width: '96vw'
    }
  })
}))

export default useStyles
