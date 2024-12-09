// let car = {
//     carName: 'TATA',
//     model: 'Safari',
//     show : function() {
//         console.log(`Car is  ${this.carName} ${this.model}`)
//         setTimeout(() => {
//             console.log(this.model)
//         },1000)
//     }
// }

// car.show()

/* //Object destructure

const wes = {
    first: 'surajit',
    last: 'maity',
    twitter: '/twitter/surajit',
    links: {
        social: {
            facebook: 'https://facebook.com/bharat035',
            insta: 'https://instagram.com/er.surajit.maity'
        }
    }
}

const {facebook: fb, insta: ins} = wes.links.social;  // facebook renamed as fb and insta renamed as ins

console.log(fb, " " + ins)


const {w: width = 100, h: height = 200} = {w: 800}
console.log(height)

*/

/*

// Array destructure

const names = ['Jay', 123, 'BWU', 'Amity', 'LPU', 'Jis']

const [name, roll, ...clg] = names;

console.log(clg)

const str = 'Cricket, Virat, 82'

const [sport, fName, score] = str.split(",")

//console.log(score)

*/


// function currencyConvert(amount) {
//     const convert = {
//         USD : amount * 9,
//         GPB : amount * 110,
//         AUD : amount * 5
//     }
//     return convert;
// }

// const {USD, AUD} = currencyConvert(100);


// console.log(AUD)

// const arr1 = ['Java', 'JS', 'Python']
// const arr2= ['spring', 'Next JS', 'Django']

// const newArr = [...arr1,'React JS', ...arr2]

// console.log(newArr)


// const team = ['Rohit', 'virat', 'Bhumra', 'Pant', 'Shami', 'KL Rahul', 'Siraj']

// const [Cap, VP, ...players] = team;
// console.log(Cap, VP, players)


/*
class Dog{
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;

    }

    bark() {
        console.log(`Bark bark my name is ${this.name}`)
    }

    cuddle() {
        console.log('Love you owner');
    }

    static info() {
        console.log(`Dog is better than cat`)
    }

    set nickName(value) {
        this.nick = value;
    }
    get nickName() {
        return this.nick.toUpperCase();
    }

}

const tophy = new Dog('Tophy', 'Gray Hound')

tophy.bark()
tophy.cuddle()
Dog.info()

tophy.nickName = 'Tommy'
console.log(tophy.nickName)

*/

// Tagged template literals


function highlight(Strings, ...values) {
    let str = '';
    Strings.forEach((string, i) => {
        str += string + (values[i] || '')
    });

    return str
}

const name = 'snickers';
const age = 100;

const sentence = highlight`My dog name is ${name} and he is ${age} years old`

console.log(sentence)






