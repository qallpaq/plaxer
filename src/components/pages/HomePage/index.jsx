import React from 'react'
import HomePageSlider from '../../HomePageSlider'
import HomePageCards from '../../HomePageCards'
import HomePageVideo from '../../HomePageVideo'
import HomePageContentSlider from '../../HomePageContentSlider'
import TabsComponent from '../../Tabs'
import HomePageParallax from '../../HomePageParallax'
import HomePageFeatures from '../../HomePageFeatures'
import FooterSlider from '../../FooterSlider'


const HomePage = () => {
    return (
        <div className='home-page'>
            <HomePageSlider/>
            <HomePageCards/>
            <HomePageVideo/>
            <HomePageContentSlider/>
            <TabsComponent/>
            <HomePageParallax/>
            <HomePageFeatures/>
            <FooterSlider/>
        </div>
    )
}

export default HomePage
