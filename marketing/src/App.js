import React from 'react'
import { StylesProvider }  from '@material-ui/core/styles'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Landing from './components/Landing'
import Pricing from './components/Pricing'

const App = () => {
  return (
      <StylesProvider>
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