import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { Typography } from '@material-ui/core'
import { setAlert } from '../../redux/actions'
import { motion } from 'framer-motion'
import { slideTop } from './styles/animation'
import useStyles from './styles/styles'


const Alert = ({message}) => {
  const classes = useStyles()

  const dispatch = useDispatch()

  const timer = setTimeout(() => {
    dispatch(setAlert(false))
  }, 2000)

  useEffect(() => {
    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      className={classes.root}
      variants={slideTop}
      initial='hidden'
      animate='visible'
    >
      <Typography className={classes.title}>
        {message}
      </Typography>
    </motion.div>
  )
}

Alert.propTypes = {
  message: PropTypes.string.isRequired
}

export default Alert
