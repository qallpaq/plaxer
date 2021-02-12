import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeModalSlide } from '../../redux/actions'
import { fadeIn } from './styles/animation'
import { motion } from 'framer-motion'
import useStyles from './styles/modalSlideStyles'


const ModalSlide = () => {
  const currentSlide = useSelector(state => state.root.currentModalSlide)

  const classes = useStyles()

  const dispatch = useDispatch()
  const changeModal = payload => {
    dispatch(changeModalSlide(payload))
  }

  return (
    <div className={classes.root}>
      <motion.img
        variants={fadeIn}
        initial='hidden'
        animate='visible'
        className={classes.img}
        src={currentSlide}
        onClick={() => changeModal(null)}
        alt="slide"/>
    </div>
  )
}

export default ModalSlide
