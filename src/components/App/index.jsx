import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { useSelectorContext } from '../SelectorContext'
import { changeModalSlide } from '../../redux/actions'
import Header from '../Header'
import {
  HomePage,
  BlogPage,
  BlogDetailsPage,
  AboutPage,
  ContactsPage,
  MatchPage
} from '../pages'
import Footer from '../Footer'
import useStyles from './styles/styles'


const App = () => {
  const classes = useStyles()

  const {currentModalSlide} = useSelectorContext()

  const dispatch = useDispatch()

  useEffect(() => {
    if (currentModalSlide) {
      document.body.onscroll = () => {
        dispatch(changeModalSlide(null))
      }
    }
  }, [currentModalSlide])

  return (
    <div className={classes.root}>
      <Header/>
      <Switch>
        <Route
          path='/'
          exact
          component={HomePage}
        />
        <Route
          path='/match/:id'
          exact
          component={MatchPage}
        />
        <Route
          path='/blog'
          exact
          component={BlogPage}
        />
        <Route
          path='/blog/:id'
          exact
          component={BlogDetailsPage}
        />
        <Route
          path='/about'
          exact
          component={AboutPage}
        />
        <Route
          path='/contacts'
          exact
          component={ContactsPage}
        />
      </Switch>
      <Footer/>
    </div>
  )
}

export default App
