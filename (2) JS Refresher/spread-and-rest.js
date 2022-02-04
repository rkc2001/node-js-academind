const person = {
  name: "Max",
  age: 29,
  greet() {
    console.log("Hi, I am " + this.name);
  },
};
console.log(person);

const hobbies = ["Sports", "Cooking"];
console.log(hobbies.map((hobby) => "Hobby: " + hobby));

// Lets say we want to implement a pattern where when we add a new hobby, we don't edit the original array,
// but create a new array with all old values and a new value (IMMUTABILITY)
const copiedArray = hobbies.slice();
console.log(copiedArray);

//  - not a copied array, but a new array with first value as the entire old array (WRONG method)
const copiedArray2 = [hobbies];
console.log(copiedArray2);

/*
 * Spread operator - three dots in front of array or object
 * Pulls out all the elements/properties and put it to whatever is around that spread operator (here [] -> thus     added to new array)
 */
const copy3 = [...hobbies];
console.log(copy3);

const copyPerson = { ...person };
console.log(copyPerson);

/*
 * Rest operator - exact opposite behaviour of spread
 * ...args -> takes all the arguements and bundles up into an array that can be returned
 * The place where we use this operator defines how we're calling it.
 * Pull out of - spread
 * Merge into array (used in arguement list of a function) - rest
 */
const toArray = (arg1, arg2, arg3) => {
  return [arg1, arg2, arg3];
};
console.log(toArray(1, 2, 3));

const toArray2 = (...args) => {
  return args;
};
console.log(toArray2(1, 2, 3, 4));
