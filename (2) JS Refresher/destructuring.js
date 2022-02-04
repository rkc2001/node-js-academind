const person = {
  name: "Max",
  age: 29,
  greet() {
    console.log("Hi, I am " + this.name);
  },
};
console.log(person);

const printName = (personData) => {
  console.log(personData.name);
};

printName(person);

// Since we're only interested in the name, we can use a feature called object destructuring wherein we specify the
// property of incoming object we're interested in inside curly braces { in the arguement list }
const printTheName = ({ name }) => {
  console.log(name);
};
printTheName(person);

// creates two new constants which holds the values of name and age as in the object (** must match property names)
const { name, age } = person;
console.log(name, age);

// Array Destructuring
const hobbies = ["Sports", "Cooking"];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);
