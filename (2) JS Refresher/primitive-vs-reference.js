// https://academind.com/tutorials/reference-vs-primitive-values

// Primitive Type - (Same as pass by value)
var name = 'Max'
console.log(name);

var secondName = name;
console.log(secondName);

name = 'Chris';
console.log(secondName);

// Reference Type - (Same as pass by reference)
var person = {
  age: 28,
  name: 'Max',
  hobbies: ['Sports', 'Cooking']
};
console.log(person);

var secondPerson = person;
console.log(secondPerson);

person.name = 'Chris';
secondPerson.hobbies.push('Reading');
console.log(secondPerson);

// person and secondPerson are two different pointers in the stack but point to same location in heap

// To copy contents of an object into another object - {merges two objects into a single one}
var thirdPerson = Object.assign({}, person);
console.log(thirdPerson);


/* Even if we have a new object, properties if they're reference types are the old ones ... here secondPerson.hobbies is a reference array */