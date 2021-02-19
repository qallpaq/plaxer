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


const TabItemCard = ({name, number, img, win, styles, fontStyles}) => {
  const classes = useStyles()

  return (
    <Card className={classes.root} style={styles}>
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
            style={fontStyles}
          >
            {name}
          </Typography>
          <Typography
            className={classes.number}
            variant="body2"
            color="secondary"
            component="p"
            style={fontStyles}
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
  win: PropTypes.bool.isRequired,
  styles: PropTypes.object,
  fontStyles: PropTypes.object
}

export default TabItemCard
