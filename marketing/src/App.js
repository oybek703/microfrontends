import React from 'react'
import { StylesProvider, createGenerateClassName }  from '@material-ui/core/styles'
import {Router, Switch, Route} from 'react-router-dom'
import Landing from './components/Landing'
import Pricing from './components/Pricing'

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma'
})

const App = ({history}) => {
  return (
      <div>
        <StylesProvider generateClassName={generateClassName}>
          <Router history={history}>
            <Switch>
              <Route path='/' exact component={Landing}/>
              <Route path='/pricing' exact component={Pricing}/>
            </Switch>
          </Router>
        </StylesProvider>
      </div>
  )
}

export default App