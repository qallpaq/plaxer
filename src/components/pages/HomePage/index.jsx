import React from 'react'
import HomePageSlider from "../../HomePageSlider"
import HomePageCards from "../../HomePageCards"
import HomePageVideo from "../../HomePageVideo"
import HomePageContentSlider from "../../HomePageContentSlider"


const HomePage = () => {
    return (
        <div className='home-page'>
            <HomePageSlider/>
            <HomePageCards/>
            <HomePageVideo/>
            <HomePageContentSlider/>
        </div>
    )
}

export default HomePage
