import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles({
  root: {
    marginBottom: '20px'
  },
  img: {
    height: '250px',
    width: '100%'
  },
  title: {
    fontWeight: 700,
    fontFamily: 'Poppins, sans-serif'
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  input: {
    marginBottom: '10px',
    color: '#fff'
  }
})

export default useStyles
