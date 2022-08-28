import React from 'react'
import { StylesProvider, createGenerateClassName }  from '@material-ui/core/styles'
import {Router, Switch, Route} from 'react-router-dom'
import SignIn from './components/Signin'
import SignUp from './components/Signup'

const generateClassName = createGenerateClassName({
  productionPrefix: 'au'
})

const App = ({history}) => {
  return (
      <div>
        <StylesProvider generateClassName={generateClassName}>
          <Router history={history}>
            <Switch>
              <Route component={SignIn} path='/auth/signin'/>
              <Route component={SignUp} path='/auth/signup'/>
            </Switch>
          </Router>
        </StylesProvider>
      </div>
  )
}

export default App