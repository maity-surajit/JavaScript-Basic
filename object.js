// let age = 10;

// let person = {
//     age: age,  // - reference type of object
//     name: 'Surajit', // assigning value to a property
//     college: 'BWU',
//     show: function() {
//         console.log(`inside person object, Hello ${this.name}`);
//     },
// }

// //console.log(person['name'])

// //console.log(delete person.college)
// console.log(person.show())

/*
if (age === 25) {
    console.log("I'm 25 years old");
 } else if (age === 30) {
    console.log("I'm 30 years old");
 } else if (age === 40) {
    console.log("I'm 40 years old");
 } else {
    console.log("Any age other than 25, 30, 40");
 }
*/


/*

function guess(age) {
    switch(age) {
        case 25:
            console.log('25')
            break;
        case 30:
            console.log('30')
            break;
        case 40:
            console.log(40)
            break;
        default:
            console.log("Anyother")
    }
}


guess(30)



const values = [[], {}, -10, 1, 0, "", "full string", " ", undefined, NaN, null];


values.forEach((value) => {
   if (value) {
       console.log(value, "is truthy");
   } else {
       console.log(value, "is falsy");
   }
});
*/

// const age = 10;

// switch (true) {
//     case (age < 25):
//         console.log("I'm less than 25 years old");
//         break;
//     case (age >= 25 && age < 30):
//         console.log("I'm in between of 25 to 29 years");
//         break;
//     case (age >= 30 && age < 40):
//         console.log("I'm in between of 30 to 39 years");
//         break;
//     default:
//         console.log("I'm 40+ years old");
// }



// function test() {
//     console.log("Inside test1 function");
//  }
//  if (condition) {
//     test();
//  }

 
//  const pass = true;

//  pass ? test() : null

 let age = 80;
// if (age > 75) {
//    console.log("You are old");
// } else if (age >= 30 && age <= 75) {
//    console.log("You are average");
// } else {
//    console.log("You are young");
// }

let res = age > 75 ? 'You are old' : (age >= 30 && age <= 75) ? 'You are average': 'You are yung'
console.log(res);
