// var userName = "Max";
// var age = 30;
// var hasHobby = true;

// let userName = "Max";
// let age = 30;
// let hasHobby = true;

// let age = 35

const userName = "Max";
const age = 30;
const hasHobby = true;

// function summary(userName, userAge, userHasHobby) {
//   return (
//     "Name is " +
//     userName +
//     ", Age is " +
//     userAge +
//     ", and the user has hobbies: " +
//     userHasHobby
//   );
// }


// Anonymous Function (without having name)
// const summary =  function(userName, userAge, userHasHobby) {
//   return (
//     "Name is " +
//     userName +
//     ", Age is " +
//     userAge +
//     ", and the user has hobbies: " +
//     userHasHobby
//   );
// }


// Arrow function
const summary = (userName, userAge, userHasHobby) => {
  return (
    "Name is " +
    userName +
    ", Age is " +
    userAge +
    ", and the user has hobbies: " +
    userHasHobby
  );
}


// const add = (a, b) => {
//     return a + b
// }
const add = (a, b) => a + b

console.log(add(1, 2));

// const addOne = (a) => a+1
const addOne = a => a+1
console.log(addOne(1));

const addrandom = () => 2+2
console.log(addrandom());




console.log(summary(userName, age, hasHobby));
