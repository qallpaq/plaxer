import React, { useEffect, useState } from 'react'
import { Button } from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import { motion } from 'framer-motion'
import { scrollBack } from './tools'
import { btnVariants } from './styles/animation'
import useStyles from './styles/styles'


const Content = ({children, styled = true}) => {
  const [view, setView] = useState(false)

  const classes = useStyles(view)

  const handleScrollChange = () => {
    const scrollY = window.pageYOffset
    const pageHeight = document.documentElement.offsetHeight

    scrollY > pageHeight / 10
      ? setView(true)
      : setView(false)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    document.addEventListener('scroll', handleScrollChange)

    return () => document.removeEventListener('scroll', handleScrollChange)
  }, [])

  return (
    <div className={styled ? classes.root : ''}>
      {children}
      <Button
        className={classes.btn}
        onClick={() => scrollBack(window.scrollY)}
        startIcon={<ArrowForwardIosIcon/>}
        component={motion.button}
        variants={btnVariants}
        initial='hidden'
        whileHover='hover'
      >
        back to top
      </Button>
    </div>
  )
}

export default Content
