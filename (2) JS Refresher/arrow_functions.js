const name = "Max";
let age = 29;
const hasHobbies = true;

age = 31;

const summarizeUser = function (userName, userAge, userHasHobby) {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    " and the user has hobbies ? - " +
    userHasHobby
  );
};

const summUser = (userName, userAge, userHasHobby) => {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    " and the user has hobbies ? - " +
    userHasHobby
  );
};

console.log(summarizeUser(name, age, hasHobbies));
console.log(summUser(name, age, hasHobbies));

// 'this' in an arrow function refers to the same thing as 'this' outside of the arrow function
// Thus, an arrow function syntax is preferred.

// Special Syntax -
const add = (a, b) => {
  return a + b;
};
console.log(add(1, 2));

// arrow function with only one statement that is return statement
const addTwo = (a, b) => a + b;
console.log(addTwo(1, 2));

// only one arguement - remove braces
const addOne = a => a + 1;
console.log(addOne(1));
