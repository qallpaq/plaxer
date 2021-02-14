import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import { BlogPage, HomePage } from '../pages/'
import useStyles from './styles/styles'
import BlogDetails from '../BlogDetails'


const App = () => {
  const classes = useStyles()

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
          path='/blog'
          exact
          component={BlogPage}
        />
        <Route
          path='/blog/:id'
          exact
          component={BlogDetails}
        />
        <Route
          path='/2'
          exact
          component={() => <div>2</div>}
        />
      </Switch>
      <Footer/>
    </div>
  )
}

export default App
