import React, {Component} from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {Typography} from "@material-ui/core"
import csgo from '../../assets/images/contentSlider/1.jpg'
import dota from '../../assets/images/contentSlider/2.jpg'
import pubg from '../../assets/images/contentSlider/3.jpg'
import csgo2 from '../../assets/images/contentSlider/4.jpg'
import fortnite from '../../assets/images/contentSlider/5.jpg'
import csgoLogo from '../../assets/images/contentSlider/logos/csgo.svg'
import dotaLogo from '../../assets/images/contentSlider/logos/dota-2.svg'
import fortniteLogo from '../../assets/images/contentSlider/logos/fortnite.svg'
import pubgLogo from '../../assets/images/contentSlider/logos/pubg.svg'
import './sltyes.css'


const SubtitleLeftItem = ({upper, down}) => (
    <div className="content-slider__left-item">
        <Typography className='left-item__upper'>
            {upper}
        </Typography>
        <br/>
        <Typography className='left-item__down'
                    color='primary'>
            {down}
        </Typography>
    </div>
)

export default class HomePageContentSlider extends Component {
    render() {
        const items = [
            {img: csgo, svg: csgoLogo},
            {img: dota, svg: dotaLogo},
            {img: pubg, svg: pubgLogo},
            {img: csgo2, svg: csgoLogo},
            {img: fortnite, svg: fortniteLogo},
        ]

        const settings = {
            infinite: true,
            swipeToSlide: true,
            slidesToShow: 4,
            touchThreshold: 12,
        }

        const isDota = slide => slide.svg === dotaLogo ? "slider-svg-wrapper_dota" : ""

        return (
            <div className='home-page__content__slider'>
                <Slider {...settings}>
                    {items.map(slide => (
                        <div className="content-slider-item" key={slide.img}>
                            <div className={`slider-svg-wrapper ${isDota(slide)}`}>
                                <img src={slide.svg}
                                     alt="slide-logo"/>
                            </div>
                            <div className="slider-img-wrapper">
                                <img src={slide.img}
                                     alt="slide"/>
                            </div>
                            <div className="content-slider__text">
                                <div className="content-slider-title">
                                    eSport Ligue CSGO Devision
                                </div>
                                <div className="content-slider-subtitle">
                                    <div className="content-slider__left">
                                        <SubtitleLeftItem upper='4 Groups'
                                                          down='32 Players'/>
                                        <SubtitleLeftItem upper='Prize Pool'
                                                          down='5000$'/>
                                    </div>
                                    <div className="content-slider__right">
                                        Feb.07.2021 - 06:43 pm
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        )
    }
}
