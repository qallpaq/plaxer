import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
  root: {
    margin: '160px auto 80px',
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      margin: '100px auto 50px'
    }
  },
  btn: view => ({
    position: 'fixed',
    right: '-50px',
    bottom: '60px',
    display: view ? 'flex' : 'none',
    background: 'transparent',
    textTransform: 'uppercase',
    transition: '.2s',
    transform: 'rotate(-90deg)',
    fontSize: '14px',
    '&:hover': {
      color: theme.palette.primary.main
    }
  })
}))

export default useStyles
