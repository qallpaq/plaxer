import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
    root: {
        background: '#272727',
        padding: '30px 0',
    },
    divider: {
        background: 'rgba(123,123,123,.3)',
    },
    text: {
        fontSize: '11px',
        opacity: '.5',
        marginTop: '20px',
    },
    link: {
        cursor: 'pointer',
        transition: '.2s',
        '&:hover': {
            color: theme.palette.primary.main
        }
    }
}))

export default useStyles
