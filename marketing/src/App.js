import React from 'react'
import { StylesProvider, createGenerateClassName }  from '@material-ui/core/styles'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Landing from './components/Landing'
import Pricing from './components/Pricing'

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma'
})

const App = () => {
  console.log('this log is from marketing App component.')
  return (
      <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Landing}/>
            <Route path='/pricing' exact component={Pricing}/>
          </Switch>
        </BrowserRouter>
      </StylesProvider>
  )
}

export default App