import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from "react-redux"
import {HashRouter as Router} from "react-router-dom"
import store from "./redux/store"
import App from "./components/App"
import {ThemeProvider} from "@material-ui/styles"
import theme from "./theme"


ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <Router>
                <App/>
            </Router>
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
)
