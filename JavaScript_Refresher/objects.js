// Object
// A key-value pair is also called a "property" or a "field" of the object
// Object allow us to group data together
// not just have variables in there, but can also have functions in here

const person = {
  userName: "Max",
  age: 30,
//   greet: () => {
//     console.log("Hi, I am " + this.userName);   (THIS IS NOT WORKING)
//   },

//   greet: function() {
//     console.log("Hi, I am " + this.userName);   (THIS WORKS)
//   },

  greet() {
    console.log("Hi, I am " + this.userName);
  },
};

person.greet();
console.log(person);

