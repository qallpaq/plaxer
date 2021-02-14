import React from 'react'
import { useSelector } from 'react-redux'
import { Grid, Typography, Container } from '@material-ui/core'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote'
import { motion } from 'framer-motion'
import ComingSoon from '../ComingSoon'
import useStyles from './styles'
import { sliderInLeft } from './styles/animation'


const BlogDetails = ({match}) => {
  const classes = useStyles()

  const id = match.params.id

  const blog = useSelector(state => state.root.blogTabs[id - 1])

  return (
    <Container
      className={classes.root}
      component={motion.div}
      variants={sliderInLeft}
      initial='hidden'
      animate='visible'
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <img
            className={classes.img}
            src={blog.img}
            alt="blog"
          />
          <div className={classes.supTitle}>
            <Typography className={classes.date}>
              {blog.date}
            </Typography>
            <Typography className={classes.game}>
              #{blog.title}
            </Typography>
          </div>
          <Typography className={classes.title} variant='h5'>
            {blog.text}
          </Typography>
          <Typography className={classes.content}>
            From the overarching goal of your website, to the ima
            ges and videos within it, each element influences how your users
            perceive and navigate your website. However, even with the most engaging
            imagery or profound content, if the overall us
            er experience feels dated or unintuitive, then yo
            u lower your chances of converting your website visitors online.
          </Typography>
          <Typography className={classes.content}>
            By providing an engaging user experience, you are more likely t
            o drive conversion and ensure that your website and brand are memorable in the long run. Here are ways to
            ensure that your corporate website provides a memorable and
            intuitive user experience for your users online.
          </Typography>
          <Typography className={classes.quote}>
            “Where as you may meet many sales people, heads of
            departments, marketing managers and CEO’s as part of your business fast growing with them”
            <FormatQuoteIcon className={classes.quoteImg} color='primary'/>
          </Typography>
          <Typography className={classes.content}>
            Before you can dive-in to creating an effective user experience, you need to understand what your user is
            looking for.
            Why are they coming to your website, and how can you guide and simplify their experience online?
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <ComingSoon/>
        </Grid>
      </Grid>
    </Container>
  )
}

export default BlogDetails
