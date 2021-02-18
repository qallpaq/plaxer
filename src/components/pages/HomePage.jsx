import React from 'react'
import HomePageSlider from '../HomePageSlider'
import HomePageCards from '../HomePageCards'
import HomePageVideo from '../HomePageVideo'
import HomePageContentSlider from '../HomePageContentSlider'
import TabsComponent from '../Tabs'
import HomePageParallax from '../HomePageParallax'
import Features from '../Features'
import FooterSlider from '../FooterSlider'
import TabItem from '../HomePageTabItem'
import Page from '../Page'
import { useSelectorContext } from '../SelectorContext'


const HomePage = () => {
  const {gamesTabs} = useSelectorContext()

  return (
    <Page styled={false} page='Home'>
      <HomePageSlider/>
      <HomePageCards/>
      <HomePageVideo/>
      <HomePageContentSlider/>
      <TabsComponent
        Component={TabItem}
        data={gamesTabs}
        title='Latest matches'/>
      <HomePageParallax/>
      <Features/>
      <FooterSlider/>
    </Page>
  )
}

export default HomePage
