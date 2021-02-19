import React from 'react'
import PropTypes from 'prop-types'
import { Avatar, Typography } from '@material-ui/core'
import useStyles from './styles/styles'


const Comments = ({comments = [], width}) => {
  const classes = useStyles()

  return (
    <div className={classes.root} style={{width}}>
      {
        [...comments].reverse().map(comment => (
          <div className={classes.item} key={comment.name + comment.text}>
            <Avatar className={classes.avatar}>
              {comment.name ? comment.name[0] : 'A'}
            </Avatar>
            <div className={classes.content}>
              <div className={classes.title}>
                <Typography className={classes.name}>{comment.name}</Typography>
                <Typography className={classes.date}>{comment.date}</Typography>
              </div>
              <Typography className={classes.text}>
                {comment.text}
              </Typography>
            </div>
          </div>
        ))
      }
    </div>
  )
}

Comments.propTypes = {
  comments: PropTypes.array,
  width: PropTypes.string
}

export default Comments
