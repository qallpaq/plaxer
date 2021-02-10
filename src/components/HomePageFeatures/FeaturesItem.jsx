import React from 'react'
import PropTypes from 'prop-types'
import {
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core'
import useStyles from './styles/featuresItemStyles'


const FeatureItem = ({name, number, img}) => {
  const classes = useStyles()

  return (
    <Grid item xs={6} md={3}>
      <Card className={classes.root}>
        <img
          className={classes.media}
          src={img}
          alt="logo"
        />
        <CardContent className={classes.content}>
          <Typography
            className={classes.number}
            gutterBottom
            variant="h5"
            component="h2"
          >
            {number}
          </Typography>
          <Typography
            className={classes.text}
            variant="body2"
            color="secondary"
            component="p"
          >
            {name}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

FeatureItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
}

export default FeatureItem
