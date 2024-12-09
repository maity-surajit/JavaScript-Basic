/*

function makePizza(toppings) {
    let pizzaPromise = new Promise(function(resolve, reject) {
        resolve(`here is your ${toppings} pizza`)
    })
    return pizzaPromise;
}

let pepperoniPizza = makePizza('pepperoni')
let Lepi = makePizza(['Paneer', 'onion'])
//console.log(Lepi, pepperoniPizza)

// let waitP = Promise.all([pepperoniPizza, Lepi])

// waitP.then(function(pizza) {
//     console.log(pizza)
// })

let huPizza = Promise.race([pepperoniPizza,Lepi])

huPizza.then(function(pizza) {
    console.log(pizza)
})

// console.log('Staring')

// pepperoniPizza.then(function(p) {
//     console.log('Ahh, got it')
//     console.log(p)
// })

// console.log('finishing')





*/


function makeDinner(dish) {
    return new Promise(function(resolve, reject) {
       
        if(dish.includes('roti')) {
            reject(`${dish} sry we don't prepare roti in dinner`)
        }
        resolve('Dinner prepare')
    })
}

let dinner = makeDinner('xssad')

dinner.then(function(dinn) {
    console.log(dinn)
}).catch(err => {
    console.log(err)
})





