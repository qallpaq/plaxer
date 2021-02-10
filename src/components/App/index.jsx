import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import { HomePage } from '../pages/'


const App = () => {
  return (
    <div className='app'>
      <Header/>
      <Switch>
        <Route
          path='/'
          exact
          component={HomePage}
        />
        <Route
          path='/1'
          exact
          component={() => <div>1</div>}
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
