import React from 'react'
import TabsComponent from '../Tabs'
import TabItem from '../BlogPageTabItem'
import { motion } from 'framer-motion'
import { container } from '../BlogPageTabItem/styles/animation'
import Content from '../Content'
import { useSelectorContext } from '../SelectorContext'


const BlogPage = () => {
  const {blogTabs} = useSelectorContext()

  return (
    <Content>
      <motion.div
        variants={container}
        initial='hidden'
        animate='visible'
      >
        <TabsComponent Component={TabItem} data={blogTabs}/>
      </motion.div>
    </Content>
  )
}

export default BlogPage
