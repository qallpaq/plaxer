import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
    root: {
        margin: '70px auto',
    },
    bar: {
        background: 'transparent',
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        },
    },
    title: {
        flexGrow: '1',
        fontWeight: '600',
        fontSize: '40px',
        marginBottom: '10px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '30px'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '20px'
        },
    },
    tab: {
        textTransform: 'uppercase',
        minWidth: '100px',
        [theme.breakpoints.down('sm')]: {
            minWidth: '65px',
        },
    },
}))

export default useStyles
