// Array: An arrray is defined with square brackets, and in an array we can have any data you could normally use.

const hobbies = ["Sports", "Cooking"];
// for (let hobby of hobbies) {
//   console.log(hobby);
// }

// map() did not return in old array, it gives a new aaray
// const ab = hobbies.map(hobby => {
//     return 'Hobby: ' + hobby
// })
// console.log(ab);


console.log(hobbies.map(hobby =>  'Hobby: ' + hobby));
