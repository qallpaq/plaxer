import React from 'react'
import { Avatar, Typography } from '@material-ui/core'
import { useSelectorContext } from '../SelectorContext'
import useStyles from './styles/styles'


const Comments = () => {
  const {comments} = useSelectorContext()

  const classes = useStyles()

  return (
    <div className={classes.root}>
      {
        [...comments].reverse().map(comment => (
          <div className={classes.item} key={comment.name + comment.text}>
            <Avatar className={classes.avatar}>{comment.name[0]}</Avatar>
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

export default Comments
