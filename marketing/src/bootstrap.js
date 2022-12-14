import React from 'react'
import ReactDOM from 'react-dom'
import {createMemoryHistory, createBrowserHistory} from 'history'

import App from './App'

function mount(el, {onNavigate, defaultHistory, initialPath}) {
  const history = defaultHistory || createMemoryHistory({
    initialEntries: [initialPath]
  })
  if(onNavigate) history.listen(onNavigate)
  ReactDOM.render(<App history={history}/>, el)
  return {
    onParentNavigate: function({pathname: nextPathname}) {
      const {location: {pathname}} = history
      if (pathname !== nextPathname) history.push(nextPathname)
    }
  }
}

if (process.env.NODE_ENV === 'development') {
  const el = document.getElementById('_marketing-dev-root')
  if (el) mount(el, {defaultHistory: createBrowserHistory()})
}

export {mount}