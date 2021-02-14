import React from 'react'
import { useSelector } from 'react-redux'
import HomePageSlider from '../HomePageSlider'
import HomePageCards from '../HomePageCards'
import HomePageVideo from '../HomePageVideo'
import HomePageContentSlider from '../HomePageContentSlider'
import TabsComponent from '../Tabs'
import HomePageParallax from '../HomePageParallax'
import HomePageFeatures from '../HomePageFeatures'
import FooterSlider from '../FooterSlider'
import TabItem from '../HomePageTabItem'


const HomePage = () => {
  const games = useSelector(state => state.root.games)

  return (
    <div className='home-page'>
      <HomePageSlider/>
      <HomePageCards/>
      <HomePageVideo/>
      <HomePageContentSlider/>
      <TabsComponent
        Component={TabItem}
        data={games}
        title='Latest matches'/>
      <HomePageParallax/>
      <HomePageFeatures/>
      <FooterSlider/>
    </div>
  )
}

export default HomePage
