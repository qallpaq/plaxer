import React from 'react'
import TabsComponent from '../Tabs'
import TabItem from '../BlogPageTabItem'
import { motion } from 'framer-motion'
import { container } from '../BlogPageTabItem/styles/animation'
import Page from '../Page'
import { useSelectorContext } from '../SelectorContext'


const BlogPage = () => {
  const {blogTabs} = useSelectorContext()

  return (
    <Page page='Blog'>
      <motion.div
        variants={container}
        initial='hidden'
        animate='visible'
      >
        <TabsComponent Component={TabItem} data={blogTabs}/>
      </motion.div>
    </Page>
  )
}

export default BlogPage
