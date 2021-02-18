import React from 'react'
import {
  Grid,
  Typography,
  Container,
  useTheme,
  useMediaQuery
} from '@material-ui/core'
import { useDispatch } from 'react-redux'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote'
import { motion } from 'framer-motion'
import ComingSoon from '../ComingSoon'
import { sliderInLeft } from './styles/animation'
import Page from '../Page'
import { useSelectorContext } from '../SelectorContext'
import useStyles from './styles/blogDetailsPageStyles'
import ContactForm from '../ContactForm'
import Comments from '../Comments'
import { addComment } from '../../redux/actions'


const BlogDetailsPage = ({match}) => {
  const id = match.params.id

  const {blogTabs} = useSelectorContext()

  const blog = blogTabs.find(item => item.id === +id)

  const {img, date, title, text} = blog

  const classes = useStyles({img})

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const dispatch = useDispatch()

  const onSubmit = (values, onSubmitProps) => {

    const comment = {
      name: values.blogDetailsName,
      date: new Date().toLocaleDateString(),
      text: values.blogDetailsText
    }

    dispatch(addComment(comment))
    onSubmitProps.resetForm()
  }

  return (
    <Page page='Blog'>
      <Container
        component={motion.div}
        variants={sliderInLeft}
        initial='hidden'
        animate='visible'
      >
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <div className={classes.img}/>
            <div className={classes.supTitle}>
              <Typography className={classes.date}>
                {date}
              </Typography>
              <Typography className={classes.game}>
                #{title}
              </Typography>
            </div>
            <Typography className={classes.title} variant='h5'>
              {text}
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
        <Typography className={classes.formTitle}>Leave a Comment</Typography>
        <ContactForm
          field1='blogDetailsName'
          field2='blogDetailsEmail'
          field3='blogDetailsText'
          onSubmit={onSubmit}
          styles={{width: `${isMobile ? '100%' : '65%'}`}}
        />
        <Comments/>
      </Container>
    </Page>
  )
}

export default BlogDetailsPage
