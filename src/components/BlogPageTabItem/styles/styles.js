import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles({
  root: {
    height: '400px',
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },
  img: {
    height: '60%',
    width: '100%'
  },
  content: {
    height: '40%',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  date: {
    fontSize: '10px'
  },
  title: {
    fontSize: '21px',
    lineHeight: '1.42',
    fontWeight: 'bold'
  }
})

export default useStyles
