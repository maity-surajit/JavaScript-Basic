
// function area(l, w) {
//     return l*w;
// }

// let result = area(8,4);
// console.log(result);


// function inchTocm(inch) {
//     let cm = inch * 2.25;
//     return cm;
// }

// console.log(inchTocm(5));

// const inchsTcm = (inchs) => {return inchs *2.25}

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
//   };

// const arrayobj = Object.values(person);

// console.log(arrayobj)


// console.log(0==false)
// console.log(false==='false')

// function demo(sentence, lowercase) {

//     let repla = sentence.replace(/\s/g, '-');
//     if(lowercase) {
//         return repla.toLowerCase();
//     }
//     else {
//         return repla.toUpperCase();
//     }
// }

// console.log(demo("I am Good", false));

// person1 = {
//     name:"John",
//     age:30,
//   }

//   person2 = {
//     name:"as",
//     age:2,
//   }
// //Object.assign(person2, person1);

// let asb = Object.values(person2)
// let str = JSON.stringify(person1);
// console.log(str)

// console.log(typeof(person1))
// console.log(typeof(str))


// function Laptop(brand, model) {
//     this.brand = brand;
//     this.model = model;
// }


// let lap1 = new Laptop("HP", "X-Series")

// console.log(lap1)


// let aray1 = ["volvo", "BMW", "Audi"]

// let arr = new Array("car", "bike", "cycle");



// for(let i = 0; i< aray1.length; i++) {
//     console.log(aray1[i])
// }

// for(let x in aray1) {
//     console.log(aray1[x])
// }

// for(let x in aray1) {
//     console.log(x)
// }

// for(let e of arr) {
//     console.log(e)
// }


//let nums = [12,23,43,11]

// nums.forEach( (n) => {
//     console.log(n)
// })

// nums.forEach( printFun())

// function printFun(n) {
//     console.log(n)
// }

// let newA = nums.map( (values) => {
//     console.log(values)
// })


// let GT = nums.some( (value) => {
//     return value > 50
// })

// console.log(GT)

// const letters = new Set(["a","b","c"])

// letters.forEach(element => {
//     console.log(element)
// });

// const per1 = {
//     first: "Prasad",
//     last: "Ess"
// }

// const per2 = { ...per1}

// //console.log(per2)


// const aa = new Array(1,5,7,3,4,66)

// const cop = [... aa]

// console.log(cop)


// let dist = {
//     car: "Yes we have it",
//     name: "RR"
// }

// const myMap = new Map();
// myMap.set('name', 'WooComm')
// myMap.set('age', 19)
// myMap.set(dist, "Kuch vi")

// // console.log(myMap.get('age'))

// for(let [key, value] of myMap ) {
//     console.log(key, value)
// }




//let arr = ["as", "ds", "ed", "tt", "oo"]

// console.log(arr.slice(1,3)) - Keep the index 1 and 2 ele
// console.log(arr.splice(1,3)) - keep the index 1, 2 and 3 ele
// arr.forEach((e)=> {
//     console.log(e)
// })


// arr.forEach(function fun(d) {
//     console.log(d)
// })


// let num = [12,32,8,5,4]

// let result = num.find(function fun(n) {
//     return n > 10
// })

// console.log(result)




// function graterThanTen(value) {
//     return value > 10;
// }

// let res = num.filter(graterThanTen)

// console.log(res)

// let result = num.map( (n) => {
//     return n > 10
// })

// console.log(result)

// let re = num.some( (n) => {
//     return n > 30
// })

// console.log(re)

// let num = [12,32,8,5,4]

// function checkEle(arr, val) {
//    return arr.some((n) => {
//         return val === n
//     })
// }


//     console.log(checkEle(num, 4))


// let str = "Welcome to geeksforGeek"

// console.log(str.includes("W", 1));

// let number = [20, 24, 34, 54, 14]

// let res = number.every( (n) => {
//     return n % 2 ==0;
// })
// console.log(res)




//  const numbers = [1,2,3,4,5,6];


//  const double = numbers.map( num => num * 2)

//  console.log(double);


 //Question: Is there any better way to rewrite below messy code blocks ?

if (condition && condition2) {
 
       // do something here maybe some MATH operation(Logic-1)

} else if  (condition3){
    
       // again do something else here maybe some MATH operation (Logic-2)
}else {
       console.log("Here");
   }






// -------------NEW EXAMPLE NEW FILE-------------------
let firstName, lastName, age;
if (firstName === "Jaimin" && lastName === "Thakkar") {
   console.log("Hey there, Jaimin Thakkar nice to meet you");
}


if (lastName === "Thakkar") {
   console.log("Hey there, Jaimin Thakkar nice to meet you");
}

