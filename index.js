const burgerListElement = document.getElementById('burger-list')

fetch('http://localhost:3000/burgers')
.then(response => response.json())
.then(burgers => {
    burgers.forEach(burger => {
        addBurgerToBurgerList(burger)
    })
})

function addBurgerToBurgerList(burger){
    const liElement = document.createElement('li')
    liElement.textContent = `Burger # ${burger.id}: ${burger.name} costs $${burger.price}`
    burgerListElement.appendChild(liElement)
}