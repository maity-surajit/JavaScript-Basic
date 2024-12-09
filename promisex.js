/*

const promiseOne = new Promise(function(resolve, reject) {
    setTimeout( function() {
        console.log("Async task 1")
        resolve()
    },1000)
})

// promise consumed
promiseOne.then(function() {
    console.log('promise one has been consumed')
})

new Promise(function(resolve, reject){
    setTimeout(function() {
        console.log('Async Task 2')
        resolve()
    } , 1000)
}).then(function(){
    console.log('promiseTwo is completed...')
})

const promiseThree = new Promise(function(resolve, reject) {
    let value = false;

    if(value) {
        resolve()
    }
    else {
        reject()
    }
})

promiseThree.then(function() {
    console.log('Promise Three is resolve')
}).catch(function(err) {
    console.log('ERROR: ' + err)
})

*/
// const promiseFour = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve({username: "surajit", rollno: 35})
//     },1000)
// })

// promiseFour.then(function(user) {
//     console.log(user)
//     return user.usernameame
// })

// async function getAllDetails() {
//     const response = await promiseFour;
//     console.log(response.username)
// }

// getAllDetails()



const array = [
    { id: 1, name: "Jaimin Thakkar", gender: "male", age: 18 },
    { id: 2, name: "vishrant thakkar", gender: "male", age: 32 },
    { id: 3, name: "Keval Jagdale", gender: "male", age: 37 },
    { id: 4, name: "krishna meet", gender: "female", age: 33 },
    { id: 5, name: "nikita Vaghela", gender: "female", age: 29 },
 ];


 // Question 2: Find all the male names whose age is between 30 and 40.

//let result = array.filter((a) => a.age > 30 && a.age < 40 && a.gender === 'male').map( (n) => n.name)

// console.log(result)



//  let result = array.map( (n) => {
	
// 	let [fname, lname] = n.name.split(" ")
// 	let jobId = `BRV:${fname[0].toUpperCase()}${lname[0].toUpperCase()}-${n.id}`
	
// 	return {...n, jobId};
// })

// console.log(result)


