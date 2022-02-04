const hobbies = ["Sports", "Cooking"];
for (let hobby of hobbies) {
  console.log(hobby);
}

// hobbies. (JS suggests various methods we can use regarding arrays)

// map - allows us to transform the values and returns a new array
//       takes in a function wherein we define how to edit elements of array
console.log(hobbies.map((hobby) => "Hobby: " + hobby));

// Arrays are reference types and thus, when we store array in a constant,
//  we can still edit it without violating restriction that constants must not change
hobbies.push("Programming");
console.log(hobbies);

/*
  Reference types only store an address pointing at the place in memory where the array is stored
   And, that pointer to this address has not changed on adding an element 
*/

// Thus, whenever we're editing a constant value,
// we're not really editing a thing that is stored in the constant but editing the thing constant is pointing at
