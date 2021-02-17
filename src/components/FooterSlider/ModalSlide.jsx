import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeModalSlide } from '../../redux/actions'
import { fadeIn } from './styles/animation'
import { motion } from 'framer-motion'
import useStyles from './styles/modalSlideStyles'


const ModalSlide = () => {
  const currentSlide = useSelector(({root}) => root.currentModalSlide)

  const classes = useStyles()

  const dispatch = useDispatch()

  const offModal = () => {
    dispatch(changeModalSlide(null))
  }

  return (
    <div className={classes.root} onClick={offModal}>
      <motion.img
        className={classes.img}
        variants={fadeIn}
        initial='hidden'
        animate='visible'
        src={currentSlide}
        onClick={offModal}
        alt="slide"/>
    </div>
  )
}

export default ModalSlide
