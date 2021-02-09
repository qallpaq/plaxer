import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles({
    root: {
        margin: '50px auto',
        background: 'transparent',
        minHeight: '150px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        textAlign: 'center',
    },
    media: {
        height: '50px',
        width: '50px',
    },
    number: {
        color: '#fff',
        fontSize: '40px',
        fontWeight: '800',
        marginBottom: '10px',
        fontFamily: 'Poppins'
    },
    text: {
        textTransform: 'uppercase',
        color: '#fff',
        fontWeight: '600',
    },
})

export default useStyles
