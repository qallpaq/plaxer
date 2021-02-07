import React from 'react'
import {Grid, Container, Typography, Button} from "@material-ui/core"
import ReactPlayer from "react-player"
import useStyles from "./styles"


const HomePageVideo = () => {
    const classes = useStyles()
    return (
        <Container>
            <Grid className={classes.root}
                  container
                  alignItems='center'
                  justify="space-between">
                <Grid item sm={10} md={5}>
                    <Typography className={classes.title}
                                variant='h4'>
                        Game theme for each
                        direction and more.
                    </Typography>
                    <Typography className={classes.subtitle}
                                variant='body1'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, s
                        ed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Quis ipsum suspendisse ultrices grav
                        ida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                    </Typography>
                    <Button className={classes.button}>
                        Read more
                    </Button>
                </Grid>
                <Grid item sm={10} md={5}>
                    <ReactPlayer className={classes.player}
                                 url='https://www.youtube.com/watch?v=vIKqF0qXg9Q&ab_channel=Foals'/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default HomePageVideo
