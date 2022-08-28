import React, {lazy, Suspense, useState} from 'react'
import Header from './components/Header'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles'
import Progress from './components/Progress'

const AuthApp = lazy(() => import('./components/AuthApp'))
const MarketingApp = lazy(() => import('./components/MarketingApp'))

const generateClassName = createGenerateClassName({
  productionPrefix: 'co'
})

const App = () => {
  const [signedIn, setSignedIn] = useState(false)
  return (
      <BrowserRouter>
        <StylesProvider generateClassName={generateClassName}>
          <Header
              signedIn={signedIn}
              onSignOut={setSignedIn.bind(null, false)}/>
          <Suspense fallback={<Progress/>}>
            <Switch>
              <Route path='/auth'>
                <AuthApp onSignIn={setSignedIn.bind(null, true)}/>
              </Route>
              <Route component={MarketingApp} path='/'/>
            </Switch>
          </Suspense>
        </StylesProvider>
      </BrowserRouter>
  )
}

export default App