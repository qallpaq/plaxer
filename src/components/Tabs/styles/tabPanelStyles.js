import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles({
    root: {
        background: '#110719',
        borderBottom: '1px solid #413b49',
        fontFamily: 'Poppins',
        padding: '20px',
        marginBottom: '8px',
        transition: '.2s',
        '&:hover': {
            background: '#002357',
        }
    },
    item: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    versus: {
        width: '20%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '600',
        fontFamily: 'Poppins'
    },
    text: {
        height: '100%',
        paddingLeft: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    title: {
        fontSize: '20px',
        textTransform: 'uppercase',
        fontWeight: '600',
        fontFamily: 'Poppins',
        cursor: 'pointer',
    },
    date: {
        textTransform: 'uppercase',
        fontSize: '14px',
        fontWeight: '600',
    },
    stream: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    twitch: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '14px',
        fontWeight: '600'
    },
    twitchLogo: {
        height: '20px',
        width: 'auto',
        marginRight: '5px',
        cursor: 'pointer',
    }
})

export default useStyles
