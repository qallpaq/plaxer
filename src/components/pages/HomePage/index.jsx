import React from 'react'
import HomePageSlider from '../../HomePageSlider'
import HomePageCards from '../../HomePageCards'
import HomePageVideo from '../../HomePageVideo'
import HomePageContentSlider from '../../HomePageContentSlider'
import TabsComponent from '../../Tabs'


const HomePage = () => {
    return (
        <div className='home-page'>
            <HomePageSlider/>
            <HomePageCards/>
            <HomePageVideo/>
            <HomePageContentSlider/>
            <TabsComponent/>
        </div>
    )
}

export default HomePage
