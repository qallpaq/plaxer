import { makeStyles } from '@material-ui/core'


const padding = '15px 7px'

const useStyles = makeStyles({
  input: {
    background: '#fff',
    width: '100%',
    padding: padding,
    border: 'none',
    fontSize: '18px'
  },
  textarea: {
    resize: 'none',
    width: '100%',
    height: '150px',
    fontSize: '20px',
    padding: padding,
    marginBottom: '18px',
    '&::placeholder': {
      opacity: .8,
    }
  }
})

export default useStyles
