/*

function outer() {
    const outerVal = "In outer function"

    function inner() {
        const innerVal = "In Inner function"
        console.log(innerVal)
        console.log(outerVal)
    }

    return inner; // it will return the function along with it's lexical enviroment
}
const fun = outer()
fun();

*/

/* Lexical Scoping:

function init() {
    var browser = "FF"

    function displayBrowserName() {
        console.log(browser);
    }

    displayBrowserName();

}

init();
*/

// function createGreet(greeting = '' ) {
//     const greet = greeting.toUpperCase();

//     return function(name) {
//         return `${greet} ${name}`
//     }
// }

// const sayHello = createGreet("hello")
// const sayHey = createGreet("hey")

// console.log(sayHello('sura'))
// console.log(sayHey('Mai'))



function CreateGame(gameName) {
    let score = 0;

    return function win() {
        score ++;
        return `Your ${gameName} score is ${score}`;
    }
}

let cricket = CreateGame('Cricket')
let football = CreateGame('Football')
console.log(cricket())






function pg() {
    let username = "Shiv PG";

    function moteraPG() {
        let uname = "motera pg inside"

        console.log(username);
        console.log(uname)
    }
    return moteraPG
}

let nearpg = pg;  // storing pg function in nearpg variable.
nearpg()