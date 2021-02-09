import React from 'react'
import { Container, Typography, Button } from '@material-ui/core'
import useStyles from './styles'


const HomePageParallax = () => {
    const classes = useStyles()

    return (
        <div className={ classes.root }>
            <Container className={ classes.inner }>
                <Typography className={ classes.title } variant='h2'>
                    unicon & game expo
                </Typography>

                <Typography className={ classes.subtitle }>
                    Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Aliquid architecto atque autem dolores
                    Jacombo.
                </Typography>

                <Button>
                    View shedule
                </Button>
            </Container>
        </div>
    )
}

export default HomePageParallax
