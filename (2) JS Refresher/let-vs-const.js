// https://www.educative.io/edpresso/difference-between-var-let-and-const-keyword-in-javascript?

// const variable's value can never change further

const name = "Max";
let age = 29;
const hasHobbies = true;

age = 31;

function summarizeUser(userName, userAge, userHasHobby) {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    " and the user has hobbies ? - " +
    userHasHobby
  );
}

console.log(summarizeUser(name, age, hasHobbies));
