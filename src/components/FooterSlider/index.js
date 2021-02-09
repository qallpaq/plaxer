import React, { Component } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import one from '../../assets/images/footerSlider/1.jpg'
import two from '../../assets/images/footerSlider/2.jpg'
import three from '../../assets/images/footerSlider/3.jpg'
import four from '../../assets/images/footerSlider/4.jpg'
import five from '../../assets/images/footerSlider/5.jpg'
import six from '../../assets/images/footerSlider/6.jpg'
import seven from '../../assets/images/footerSlider/7.jpg'
import eight from '../../assets/images/footerSlider/8.jpg'
import nine from '../../assets/images/footerSlider/9.jpg'
import ten from '../../assets/images/footerSlider/10.jpg'
import eleven from '../../assets/images/footerSlider/11.jpg'
import twelve from '../../assets/images/footerSlider/12.jpg'
import bg from '../../assets/images/bg.jpg'
import bg1 from '../../assets/images/bg1.jpg'
import bg2 from '../../assets/images/bg2.jpg'
import './style.css'


export default class FooterSlider extends Component {
    render() {
        const slides = [
            one, two, three,
            four, five, six,
            seven, eight, nine,
            ten, eleven, twelve,
            bg, bg1, bg2
        ]

        const settings = {
            infinite: true,
            swipeToSlide: true,
            slidesToShow: 7,
            touchThreshold: 12,
            dots: false,
        }

        const createSlide = slide => {
            return (
                <img className='slider__item-img'
                     key={slide}
                     src={ slide }
                     alt="slide"/>
            )
        }

        return (
            <div className='footer__slider'>
                <Slider { ...settings }>
                    { slides.map(createSlide) }
                </Slider>
            </div>
        )
    }
}
