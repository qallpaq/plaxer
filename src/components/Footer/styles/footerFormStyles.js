import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',

    },
    logo: {
        height: '30px',
        width: '120px'
    },
    input: {
        opacity: '.7',
    },
    inner: {
        color: '#fff'
    },
    button: {
        marginLeft: '-10px',
        marginBottom: '15px',
        transition: '.2s',
        width: '150px',
        paddingLeft: '0',
        background: 'transparent',
        fontSize: '13px',
        '&:hover': {
            color: theme.palette.primary.main,
            background: 'transparent'
        }
    },
    label: {
        fontSize: '12px'
    },
    text: {
        opacity: '.8'
    }
}))

export default useStyles
