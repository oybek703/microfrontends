import React from 'react'
import MarketingApp from './components/MarketingApp'
import Header from './components/Header'
import {BrowserRouter} from 'react-router-dom'


const App = () => {
  return (
      <BrowserRouter>
        <h1>Hi there.</h1>
        <hr/>
        <Header/>
        <MarketingApp/>
      </BrowserRouter>
  )
}

export default App