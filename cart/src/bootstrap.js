import faker from 'faker'

function mount(el) {
  el.innerHTML = `<div>You have ${faker.datatype.number()} items in cart.</div>`
}

if (process.env.NODE_ENV === 'development') {
  const el = document.getElementById('dev-cart')
  if (el) mount(el)
}

export {mount}