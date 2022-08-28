import React from 'react'
import ReactDOM from 'react-dom'
import {createMemoryHistory, createBrowserHistory} from 'history'

import App from './App'

function mount(el, {onSignIn, onNavigate, defaultHistory, initialPath}) {
  const history = defaultHistory || createMemoryHistory({
    initialEntries: [initialPath]
  })
  if(onNavigate) history.listen(onNavigate)
  ReactDOM.render(<App onSignIn={onSignIn} history={history}/>, el)
  return {
    onParentNavigate: function({pathname: nextPathname}) {
      const {location: {pathname}} = history
      if (pathname !== nextPathname) history.push(nextPathname)
    }
  }
}

if (process.env.NODE_ENV === 'development') {
  const el = document.getElementById('_auth-dev-root')
  if (el) mount(el, {defaultHistory: createBrowserHistory()})
}

export {mount}