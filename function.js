// function wish(username) {
    
//     return `Hello Good Morning ${username}`;
// }

// let greet = wish(404)
// console.log(greet)


/*
function calculateBill(amount, rateTax) {
    return amount * (1 + rateTax);
}

let Total = calculateBill(100, 1.13)
let use = 100;
let Total1 = calculateBill(use + 20+10+20+40, 1.13)

console.log(Total1)

*/

/*

function wish(firstname, age = 25, lastname) {
    return `Good morning ${firstname} ${lastname} ${age}`  // Good morning surajit
}

function toUpper(str = 'surajit') {

    return `${str.toUpperCase()}`  // GOOD MORNING SURAJIT
}

//console.log(toUpper('ram'))
// let print = toUpper(wish('surajit'));
// console.log(print)


console.log(wish('surajit', undefined ,'maity'))


*/

// let add = function(a , b = 3) {
//     return a + b;
// }

// console.log(add(4))

// let mul = (a, b=2) => a * b;

// console.log(mul(2,5))



// const childName = (fName, lName)  => ({ fullName : `${fName} ${lName}`, age : 0 });

// console.log(childName('Kit', 'Paswan'))


/*
let car = (name, brand)  => ({ name: `${name}`, brand: `${brand}` } ) // () -> for function and {} -> for the object

console.log(car( 'S6','Volvo'))

*/

// (function(age) {
//     return  `Your age is ${age}`
// }) (10)


// let hh= {
//     hi() {
//         console.log(op)
//         var op = 'aaaa'
//     }
// }

// console.log(hh.hi())


// let addName = (fname, lname) =>  ({ fullName: `${fname} ${lname}`, age: 20 })

// let fullN = addName('surajit', 'Maity')
// console.log(fullN)