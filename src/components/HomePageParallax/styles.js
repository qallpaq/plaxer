import { makeStyles } from '@material-ui/core'
import background from '../../assets/images/parallax.jpg'


const useStyles = makeStyles({
    root: {
        margin: '100px auto',
        backgroundImage: `url(${ background })`,
        minHeight: '400px',
        transform: 'translateZ(-1px) scale(1.1)',
        backgroundAttachment: 'fixed',
        backgroundPosition: '25% 125%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-evenly'
    },
    inner: {
        transform: 'scale(0.91)',
    },
    title: {
        fontWeight: '700',
        textTransform: 'uppercase',
        fontSize: '40px',
        marginBottom: '20px',
        position: 'relative',
        zIndex: '0',
        '&::before': {
            position: 'absolute',
            top: '-20px',
            left: '-20px',
            content: '""',
            background: 'rgba(0, 0, 0, 0.6)',
            height: '80px',
            width: '200px',
            zIndex: '-1'
        }
    },
    subtitle: {
        marginBottom: '20px',
        width: '350px',
        fontSize: '18px',
        lineHeight: '1.33333',
        fontWeight: '500',
    },
})

export default useStyles
