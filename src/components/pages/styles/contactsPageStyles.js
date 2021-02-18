import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: '90px'
  },
  container: {
    padding: '50px 15px'
  },
  title: {
    fontSize: '40px',
    fontWeight: 700,
    marginBottom: '30px',
    width: '75%',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '25px',
      marginBottom: '20px'
    }
  }
}))

export default useStyles
