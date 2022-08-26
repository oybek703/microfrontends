import React from 'react'
import ReactDOM from 'react-dom'

function mount(el) {
  ReactDOM.render(<h1>Hi there</h1>, el)
}

if (process.env.NODE_ENV === 'development') {
  const el = document.getElementById('_marketing-dev-root')
  if (el) mount(el)
}

export {mount}