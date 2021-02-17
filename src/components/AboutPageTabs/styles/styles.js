import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    background: 'transparent',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    background: '#000',
    textTransform: 'uppercase'
  },
  title: {
    display: 'block',
    fontSize: '28px',
    fontWeight: '600',
    marginBottom: '30px',
    lineHeight: '1.2',
    [theme.breakpoints.down('xs')]: {
      fontSize: '22px'
    }
  },
  subtitle: {
    display: 'block',
    marginBottom: '20px',
    fontFamily: 'Poppins, sans-serif'
  },
  wrapper: {
    overflowX: 'hidden',
    flexGrow: 1,
    minHeight: '360px',
    [theme.breakpoints.down('xs')]: {
      margin: '20px -24px'
    }
  },
  tabContent: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  btnWrapper: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'flex-end'
  }
}))

export default useStyles
