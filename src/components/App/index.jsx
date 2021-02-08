import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../Header'
import HomePage from '../pages/HomePage'


const App = () => {
    return (
        <div className='app'>
            <Header/>
            <Switch>
                <Route
                    path='/'
                    exact
                    render={ () => <HomePage/> }
                />

                <Route
                    path='/1'
                    exact
                    render={ () => <div>1</div> }
                />

                <Route
                    path='/2'
                    exact
                    render={ () => <div>2</div> }
                />
            </Switch>
        </div>
    )
}

export default App
