import React from 'react'
import MarketingApp from './components/MarketingApp'
import Header from './components/Header'
import {BrowserRouter} from 'react-router-dom'
import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles'
import {mount} from 'marketing/MarketingApp'

const generateClassName = createGenerateClassName({
  productionPrefix: 'co'
})

const App = () => {
  return (
      <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
          <h1>Hi there.</h1>
          <hr/>
          <Header/>
          {mount(document.getElementById('marketing_root'))}
          {/*<MarketingApp/>*/}
        </BrowserRouter>
      </StylesProvider>
  )
}

export default App