import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
    root: {
        padding: '40px 0',
    },
    share: {
        color: theme.palette.primary.main,
        textTransform: 'uppercase',
        textAlign: 'center',
    }
}))

export default useStyles
