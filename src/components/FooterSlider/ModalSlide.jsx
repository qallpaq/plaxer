import React from 'react'
import { useDispatch } from 'react-redux'
import { changeModalSlide } from '../../redux/actions'
import { fadeIn } from './styles/animation'
import { motion } from 'framer-motion'
import useStyles from './styles/modalSlideStyles'
import { useSelectorContext } from '../SelectorContext'


const ModalSlide = () => {
  const {currentModalSlide} = useSelectorContext()
  const dispatch = useDispatch()

  const classes = useStyles({currentModalSlide})

  const offModal = () => {
    dispatch(changeModalSlide(null))
  }

  return (
    <div className={classes.root} onClick={offModal}>
      <motion.div
        className={classes.img}
        variants={fadeIn}
        initial='hidden'
        animate='visible'
        src={currentModalSlide}
        onClick={offModal}
        alt="slide"/>
    </div>
  )
}

export default ModalSlide
