import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import { motion } from 'framer-motion'
import { btnVariants } from './styles/animation'
import { changeCurrentPage, setAlert } from '../../redux/actions'
import useStyles from './styles/styles'
import { useSelectorContext } from '../SelectorContext'
import Alert from '../Alert'


const Page = ({children, styled = true, page}) => {

  const scrollBack = scroll => {
    const recursion = setTimeout(scrollBack, 15, scroll - 200)

    if (scroll <= 0.1) {
      clearTimeout(recursion)
      return window.scrollTo(0, 0)
    }

    window.scrollTo(0, scroll)
    return recursion
  }

  const [view, setView] = useState(false)

  const classes = useStyles(view)

  const dispatch = useDispatch()

  const {alert} = useSelectorContext()

  const handleScrollChange = () => {
    const scrollY = window.pageYOffset
    const pageHeight = document.documentElement.offsetHeight

    scrollY > pageHeight / 10
      ? setView(true)
      : setView(false)
  }

  useEffect(() => {
    window.scrollTo(0, 0)

    dispatch(changeCurrentPage(page))

    dispatch(setAlert(false))

    document.addEventListener('scroll', handleScrollChange)

    return () => document.removeEventListener('scroll', handleScrollChange)
  }, [])

  return (
    <div className={styled ? classes.root : ''}>
      {alert && <Alert message={alert}/>}
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

Page.propTypes = {
  children: PropTypes.node.isRequired,
  styled: PropTypes.bool,
  page: PropTypes.string.isRequired
}

export default Page
