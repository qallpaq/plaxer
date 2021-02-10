import React from 'react'
import { Container, Grid } from '@material-ui/core'
import HomePageCardsItem from './HomePageCardsItem'
import cup from '../../assets/images/cup.svg'
import twitch from '../../assets/images/twitch.svg'
import joystick from '../../assets/images/joystick.svg'
import useStyles from './styles/styles'


const HomePageCards = () => {
  const classes = useStyles()

  const cardsData = [
    {
      img: cup,
      title: 'Game Tournaments',
      subtitle: 'Create your own games tournaments and share results.'
    },
    {
      img: twitch,
      title: 'Twitch Streaming',
      subtitle: 'New streams every day from our best players.'
    },
    {
      img: joystick,
      title: 'eSports News',
      subtitle: 'Get top streams and results from World Cyber Games.'
    },
  ]

  return (
    <div className={classes.root}>
      <Container>
        <Grid spacing={3} container>
          {cardsData.map(card => (
            <Grid
              className={classes.wrapper}
              item
              xs={12}
              sm={6}
              md={4}
              key={card.title}
            >
              <HomePageCardsItem {...card}/>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
}

export default HomePageCards
