import faker from 'faker'

const cardText = `<div>You have ${faker.random.number()} items in cart.</div>`

document.getElementById('dev-cart').innerHTML = cardText