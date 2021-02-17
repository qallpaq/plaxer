import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
  img: props => ({
    height: '375px',
    marginBottom: '20px',
    width: '100%',
    background: `url(${props.img}) center`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.down('xs')]: {
      height: '275px'
    }
  }),
  title: {
    fontWeight: 600,
    fontSize: '36px',
    marginBottom: '30px'
  },
  date: {
    fontSize: '12px'
  },
  game: {
    fontSize: '12px',
    fontWeight: '800'
  },
  supTitle: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px'
  },
  content: {
    marginBottom: '20px',
    lineHeight: '1.7'
  },
  quote: {
    margin: '40px auto',
    fontSize: '24px',
    lineHeight: 1.5,
    fontWeight: 600,
    position: 'relative'
  },
  quoteImg: {
    position: 'absolute',
    bottom: '-20px',
    right: 0,
    fontSize: '65px',
    transform: 'rotate(180deg)'
  }
}))

export default useStyles
