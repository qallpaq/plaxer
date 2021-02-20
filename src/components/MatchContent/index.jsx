import React from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { Container, Typography, Grid } from '@material-ui/core'
import ComingSoon from '../ComingSoon'
import ContactForm from '../ContactForm'
import { useSelectorContext } from '../SelectorContext'
import Comments from '../Comments'
import { addMatchComment } from '../../redux/actions'
import useStyles from './styles/styles'


const Index = ({game}) => {
  const classes = useStyles()

  const {matchComments} = useSelectorContext()
  const dispatch = useDispatch()

  const onSubmit = (values, onSubmitProps) => {
    const comment = {
      name: values.matchPageInput1,
      date: new Date().toLocaleDateString(),
      text: values.matchPageText
    }

    dispatch(addMatchComment(comment))
    onSubmitProps.resetForm()
  }

  return (
    <Container className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={8}>
          <div className={classes.suptitle}>
            <Typography className={classes.date}>
              Date match December 25, 2020 12:00 am
            </Typography>
            <Typography className={classes.hash}>
              #{game.title}
            </Typography>
          </div>
          <Typography className={classes.title} component='h1'>
            eSport League – {game.title} Division
          </Typography>
          <Typography className={classes.text}>
            From the overarching goal of your website, to the images and videos within it, each element influences how
            your users perceive and navigate your website. However, even with the most engaging imagery or profound
            content, if the overall user experience feels dated or unintuitive, then you lower your chances of
            converting your website visitors online.
          </Typography>
          <Typography className={classes.text}>
            By providing an engaging user experience, you are more likely to drive conversion and ensure that your
            website and brand are memorable in the long run. Here are ways to ensure that your corporate website
            provides a memorable and intuitive user experience for your users online.
          </Typography>
          <Typography className={classes.commentsTitle}>Leave a Comment</Typography>
          <ContactForm
            field1='matchPageInput1'
            field2='matchPageInput2'
            field3='matchPageText'
            onSubmit={onSubmit}
          />
          <Comments comments={matchComments} width='100%'/>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <ComingSoon/>
        </Grid>
      </Grid>
    </Container>
  )
}

Index.propTypes = {
  game: PropTypes.object.isRequired
}

export default Index
