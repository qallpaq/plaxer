import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import useStyles from './styles/footerCommentsStyles'


const PostsItem = ({text, date}) => {
  const classes = useStyles()

  return (
    <Typography className={classes.text}>
      <span className={classes.name}>
        {text}
      </span>
      <br/>
      {date}
    </Typography>
  )
}

const FooterPosts = () => {
  const classes = useStyles()

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Typography className={classes.title} variant='h6'>
        Recent Posts
      </Typography>
      <PostsItem text='Kills You Slowly' date='November 8, 2019'/>
      <PostsItem text='Clout' date='April 22, 2019'/>
      <PostsItem text='Jerome' date='April 22, 2019'/>
    </Grid>
  )
}

export default FooterPosts
