import React from 'react'
import { withRouter } from 'react-router'
import {
  Grid,
  Typography
} from '@material-ui/core'
import { motion } from 'framer-motion'
import { fadeIn } from './styles/animation'
import Btn from '../Btn'
import useStyles from './styles/styles'


const TabItem = ({item, value, index, history}) => {
  const classes = useStyles()

  const {img, date, text, id} = item

  const setURL = () => history.push(`./blog/${id}`)

  return (
    <Grid
      className={classes.root}
      component={motion.div}
      variants={fadeIn}
      item
      xs={12}
      sm={6}
      md={4}
      hidden={value !== index}
    >
      <img
        className={classes.img}
        src={img}
        alt="game"
      />
      <div className={classes.content}>
        <Typography className={classes.date}>
          {date}
        </Typography>
        <Typography variant='h5'>{text}</Typography>
        <div>
          <Btn text='Read More' fn={setURL}/>
        </div>
      </div>
    </Grid>
  )
}

export default withRouter(TabItem)
