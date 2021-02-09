import React from 'react'
import {
    TextField,
    Button,
    Typography,
    Grid,
} from '@material-ui/core'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import logo from '../../assets/images/logo.png'
import useStyles from './styles/footerFormStyles'


const FooterForm = () => {
    const classes = useStyles()

    return (
        <Grid item xs={ 12 } sm={ 6 } md={ 3 }>
            <form className={ classes.root }
                  noValidate
                  autoComplete="off">

                <img className={ classes.logo }
                     src={ logo }
                     alt="logo"/>

                <TextField className={ classes.input }
                           type='email'
                           label="Enter your email"
                           InputLabelProps={ { className: classes.label } }
                           InputProps={ { className: classes.inner } }/>

                <Button className={ classes.button }
                        startIcon={ <ArrowForwardIcon/> }
                        disableRipple={ true }>
                    Subscribe
                </Button>

                <Typography className={ classes.text }>
                    The world without photography will be meaningless to us.
                </Typography>
            </form>
        </Grid>
    )
}

export default FooterForm
