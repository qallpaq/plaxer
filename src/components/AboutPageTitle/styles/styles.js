import { makeStyles } from '@material-ui/core'
import team from '../../../assets/images/team/team-min.jpg'


const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: '50px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '0'
    }
  },
  img: {
    height: '400px',
    width: '100%',
    minHeight: '250px',
    background: `url(${team}) center`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  },
  item: {
    width: '100%',
    overflow: 'hidden'
  }
}))

export default useStyles
