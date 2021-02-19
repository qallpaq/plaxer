import React from 'react'
import PropTypes from 'prop-types'
import {
  Typography
} from '@material-ui/core'
import Icons from '../Icons'
import useStyles from './styles/comingItemStyles'
import EmailForm from '../EmailForm'


const ComingItem = ({img, text, userMail}) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <img
        className={classes.img}
        src={img}
        alt="game"
      />
      <Typography
        className={classes.title}
        variant='h6'
      >
        {text}
      </Typography>
      <EmailForm userMail={userMail} alertMessage='You subscribed now'/>
      <Icons/>
    </div>
  )
}

ComingItem.propTypes = {
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  userMail: PropTypes.string.isRequired,
}

export default ComingItem
