import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles({
  root: {
    display: 'flex',
    zIndex: 4
  },
  toolBar: {
    paddingLeft: '0',
    paddingRight: '0'
  },
  appBar: background => ({
    transition: '.4s',
    background: background ? '#101010' : 'transparent',
    padding: '12px 0',
    boxShadow: 'none'
  }),
  logoWrapper: {
    flexGrow: 1
  },
  logo: {
    width: '160px'
  },

  hide: {
    display: 'none'
  },
  link: {
    color: '#fff'
  }
})

export default useStyles
