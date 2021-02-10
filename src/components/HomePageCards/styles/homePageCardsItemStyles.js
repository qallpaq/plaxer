import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(theme => ({
  root: {
    cursor: 'pointer',
    padding: '30px 50px',
    height: '100%',
    background: '#101010',
    color: '#ffffff',
    border: '1px solid rgba(100, 99, 100, 0.3)',
    borderRadius: 0,
    transition: '.3s',
    '&:hover': {
      background: '#002357',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '10px',
    }
  },
  mediaWrapper: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    justifyContent: 'center'
  },
  media: {
    height: '70px',
    width: '70px',
  },
}))

export default useStyles
