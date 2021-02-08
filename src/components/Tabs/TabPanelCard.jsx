import React from 'react'
import {
    Typography,
    CardActionArea,
    CardMedia,
    CardContent,
    Card
} from '@material-ui/core'
import useStyles from './styles/tabPanelCardStyles'
import PropTypes from 'prop-types'


const TabPanelCard = (props) => {
    const { name, number, img, win } = props

    const classes = useStyles(number)

    return (
        <Card className={ classes.root }>
            { win &&
            <Typography className={ classes.winner }>
                win
            </Typography>
            }

            <CardActionArea>
                <div className={ classes.mediaWrapper }>
                    <CardMedia className={ classes.media }
                               image={ img }
                               title='team'/>
                </div>

                <CardContent className={ classes.content }>
                    <Typography className={ classes.title }
                                gutterBottom
                                variant="h5"
                                component="h2">
                        { name }
                    </Typography>

                    <Typography className={ classes.number }
                                variant="body2"
                                color="secondary"
                                component="p">
                        { number }
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

TabPanelCard.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
}

export default TabPanelCard
