const person = {
  name: "Max",
  age: 29,
  /*
  greet: () => {
    console.log("Hi, I am " + this.name);
  },
  this.name gives undefined
  this in arrow function refers to global scope i.e the global node runtime scope, and not to this object
  1. Either use old definition of function greet: function(){ ... }
  2. greet() { ... }
  */
  greet() {
    console.log("Hi, I am " + this.name);
  },
};

console.log(person);
person.greet();
