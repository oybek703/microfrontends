import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

function mount(el) {
  ReactDOM.render(<App/>, el)
}

console.log(process.env.NODE_ENV)

if (process.env.NODE_ENV === 'development') {
  const el = document.getElementById('_marketing-dev-root')
  if (el) mount(el)
}

export {mount}