import React, { Component } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Typography, Container, Button, IconButton } from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import './style.css'


const SampleArrow = () => <div style={ { display: 'none' } }/>

export default class HomePageSlider extends Component {
    render() {
        const items = [
            { number: '1', text1: 'Games with idea &', text2: 'memorable design.' },
            { number: '2', text1: 'The New Game &', text2: 'awesome concept.' },
            { number: '3', text1: 'Play with us in', text2: 'the all new games.' },
        ]

        const settings = {
            dots: true,
            swipe: false,
            infinite: true,
            speed: 600,
            // autoplay: true,
            // autoplaySpeed: 5000,
            pauseOnHover: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <SampleArrow/>,
            prevArrow: <SampleArrow/>,
            appendDots: dots => (
                <div style={ { borderRadius: '10px', padding: '10px' } }>

                    <Container>
                        <ul style={ {
                            margin: '0px',
                            width: '130px',
                            paddingInlineStart: '0',
                            display: 'flex',
                            justifyContent: 'space-between'
                        } }>
                            { dots }
                        </ul>
                    </Container>

                </div>),

            customPaging: i => (

                <div style={ {
                    width: '40px',
                    color: 'white',
                    background: '#0750d0'
                } }>
                    0{ i + 1 }
                </div>
            )
        }

        return (
            <>
                <div className="home-page__icons">
                    <IconButton>
                        <InstagramIcon className='icon__item' fontSize='small'/>
                    </IconButton>

                    <IconButton>
                        <FacebookIcon className='icon__item' fontSize='small'/>
                    </IconButton>

                    <IconButton>
                        <TwitterIcon className='icon__item' fontSize='small'/>
                    </IconButton>
                </div>
                <Slider { ...settings }>
                    { items.map(item => (
                        <div className={ `slider__background slider__background_${ item.number }` }
                             key={ item.text1 }>
                            <Container>
                                <div className='slider__item-title'>
                                    <div className='slider__figure'>
                                        0{ item.number }
                                    </div>
                                    <Typography variant='h3'>
                                        { item.text1 }
                                        <br/>
                                        { item.text2 }
                                    </Typography>
                                    <Button>
                                        Watch now
                                    </Button>
                                </div>
                            </Container>
                        </div>
                    )) }
                </Slider>
            </>
        )
    }
}
