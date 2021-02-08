import React from 'react'
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import useStyles from './styles/homePageCardsItemStyles'


function HomePageCardsItem({ img, title, subtitle }) {
    const classes = useStyles()

    return (
        <Card className={ classes.root }>
            <div className={ classes.mediaWrapper }>
                <CardMedia component='img'
                           src={ img }
                           className={ classes.media }
                           title='player'/>
            </div>
            <CardContent>
                <Typography gutterBottom
                            variant="h5"
                            component="h2"
                            align='center'>
                    { title }
                </Typography>
                <Typography variant="body2"
                            component="p"
                            align='center'>
                    { subtitle }
                </Typography>
            </CardContent>
        </Card>
    )
}

HomePageCardsItem.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
}

export default HomePageCardsItem
