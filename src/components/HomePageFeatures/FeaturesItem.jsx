import React from 'react'
import useStyles from './styles/featuresItemStyles'
import { Card, CardContent, Grid, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'


const FeaturesCard = ({ name, number, img }) => {
    const classes = useStyles()

    return (
        <Card className={ classes.root }>
            <img className={ classes.media }
                 src={ img }
                 alt="logo"/>

            <CardContent className={ classes.content }>
                <Typography className={ classes.number }
                            gutterBottom
                            variant="h5"
                            component="h2">
                    { number }
                </Typography>

                <Typography className={ classes.text }
                            variant="body2"
                            color="secondary"
                            component="p">
                    { name }
                </Typography>
            </CardContent>
        </Card>
    )
}

FeaturesCard.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
}

const FeatureItem = ({ name, number, img }) => {
    return (
        <Grid item xs={ 12 } sm={ 6 } md={ 3 }>
            <FeaturesCard img={ img }
                          number={ number }
                          name={ name }/>
        </Grid>
    )
}

export default FeatureItem
