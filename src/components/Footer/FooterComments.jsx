import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography } from '@material-ui/core'
import useStyles from './styles/footerCommentsStyles'


const CommentsItem = ({author, text}) => {
  const classes = useStyles()

  return (
    <Typography className={classes.text}>
      <span className={classes.name}>
        {author}
      </span> - {text}
    </Typography>
  )
}

CommentsItem.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

const FooterComments = () => {
  const classes = useStyles()
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Typography className={classes.title} variant='h6'>
        Recent Comments
      </Typography>
      <CommentsItem
        author={'Vasily Khan'}
        text={'Driving Engagement Online'}
      />
      <CommentsItem
        author={'Iven Jacombo'}
        text={'Designing for the Web in 2020'}
      />
      <CommentsItem
        author={'Onton Urin'}
        text={'Streamlining the Path to Conversion'}
      />
    </Grid>
  )
}

export default FooterComments
