import React from 'react'
import { useSelector } from 'react-redux'
import TabsComponent from '../Tabs'
import TabItem from '../BlogPageTabItem'
import { motion } from 'framer-motion'
import useStyles from './styles/blogPageStyles'
import { container } from '../BlogPageTabItem/styles/animation'


const BlogPage = () => {
  const classes = useStyles()
  const blogTabs = useSelector(state => state.root.blogTabs)

  return (
    <motion.div
      className={classes.root}
      variants={container}
      initial='hidden'
      animate='visible'
    >
      <TabsComponent Component={TabItem} data={blogTabs}/>
    </motion.div>
  )
}

export default BlogPage
