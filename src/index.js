import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter as Router } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import store from './redux/store'
import SelectorContextProvider from './components/SelectorContext'
import 'normalize-css'
import theme from './theme'
import App from './components/App'


ReactDOM.render(
  <Provider store={store}>
    <SelectorContextProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <App/>
        </Router>
      </ThemeProvider>
    </SelectorContextProvider>
  </Provider>,
  document.getElementById('root')
)
