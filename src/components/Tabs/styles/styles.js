import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles({
    root: {
        margin: '70px auto',
    },
    bar: {
        background: 'transparent',
        display: 'flex',
        flexDirection: 'row',
    },
    title: {
        flexGrow: '1',
        fontWeight: '600',
        fontSize: '40px',
        marginBottom: '10px'
    },
})

export default useStyles
