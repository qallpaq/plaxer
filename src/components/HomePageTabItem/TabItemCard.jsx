import React from 'react'
import {
  Typography,
  CardActionArea,
  CardMedia,
  CardContent,
  Card
} from '@material-ui/core'
import PropTypes from 'prop-types'
import useStyles from './styles/tabItemCardStyles'


const TabItemCard = ({name, number, img, win}) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      {win &&
      <Typography className={classes.winner}>
        win
      </Typography>
      }
      <CardActionArea>
        <div className={classes.mediaWrapper}>
          <CardMedia
            className={classes.media}
            image={img}
            title='team'
          />
        </div>
        <CardContent className={classes.content}>
          <Typography
            className={classes.title}
            gutterBottom
            variant="h5"
            component="h2"
          >
            {name}
          </Typography>
          <Typography
            className={classes.number}
            variant="body2"
            color="secondary"
            component="p"
          >
            {number}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

TabItemCard.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
}

export default TabItemCard
