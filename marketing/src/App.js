import React from 'react'
import { StylesProvider, createGenerateClassName }  from '@material-ui/core/styles'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Landing from './components/Landing'
import Pricing from './components/Pricing'

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma'
})

const App = () => {
  return (
      <div>
        <StylesProvider generateClassName={generateClassName}>
          <BrowserRouter>
            <Switch>
              <Route path='/' component={Landing}/>
              <Route path='/pricing' exact component={Pricing}/>
            </Switch>
          </BrowserRouter>
        </StylesProvider>
      </div>
  )
}

export default App