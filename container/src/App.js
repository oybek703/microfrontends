import React, {lazy, Suspense} from 'react'
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
  return (
      <BrowserRouter>
        <StylesProvider generateClassName={generateClassName}>
          <Header/>
          <Suspense fallback={<Progress/>}>
            <Switch>
              <Route component={AuthApp} path='/auth'/>
              <Route component={MarketingApp} path='/'/>
            </Switch>
          </Suspense>
        </StylesProvider>
      </BrowserRouter>
  )
}

export default App