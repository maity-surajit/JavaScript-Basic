// const feedback = [
//     { comment: "Love the burgs", rating: 4 },
//     { comment: "Horrible Service", rating: 2 },
//     { comment: "Smoothies are great, liked the burger too", rating: 5 },
//     { comment: "Ambiance needs work", rating: 3 },
//     { comment: "I DONT LIKE BURGERS", rating: 1 },
//   ];

//   let ratiings = feedback.find((rating) => rating.comment.includes('burgs'))

//   let feed = feedback.find((names) => names.comment.includes('Smoothies'))

//   let abc = feedback.find((value) => {
//     return value.comment.includes('Service')
//   }
    
//   )
//   console.log(abc)

const array = [
  { id: 1, name: "Jaimin Thakkar", gender: "male", age: 18 },
  { id: 2, name: "vishrant thakkar", gender: "male", age: 32 },
  { id: 3, name: "Keval Jagdale", gender: "male", age: 37 },
  { id: 4, name: "krishna meet", gender: "female", age: 33 },
  { id: 5, name: "nikita Vaghela", gender: "female", age: 29 },
];

/*
// Question 1: Find all the females

let result = array.filter((obj) => {
  return obj.gender === 'female'
})

console.log(result);
*/

/*
// Question 2: Find all the male names whose age is between 30 and 40.

let res = array.filter((e) =>  (e.age > 30 && e.age < 40))

console.log(res.map((n) => n.name))

//console.log(res)

*/

/*

// Question 3: Check if there is any person who's transgender NOTE: here O/P must be in boolean like true or false.

console.log(array.some((check) => check.gender=== 'transgender'))

*/

/*
// Question 4: Add one more key to each object key name is "jobId" and key value should be the combination of "BRV:" along with 1st character of first name and 1st character of last name both characters MUST be in capital letters followed by - with id. For example: for 1st object it should be jobId: BRV:JT-1

let newArray = array.map(item => {
  const [firstName, lastName] = item.name.split(" ");
  const jobId = `BRV:${firstName[0]}${lastName[0]}-${item.id}`;

  return {...item , jobId};
})

console.log(newArray)
*/

/*
// Question 5: Check if 10 is present in an array [2,4,6,8,10] or not NOTE: O/P must be true or false.

const arr = [2,4,6,8,10]

console.log(arr.some(e => e === 10))
*/

// Question 6: Check if every element of array1 [1,2,3] is present in array2[1,2,3,4,5] or not. NOTE: O/P must be true or false.

const array1 = [1,2,3];

const array2 = [1,2,3,4,5];

console.log(array1.every(ele => array2.includes(ele) ))
