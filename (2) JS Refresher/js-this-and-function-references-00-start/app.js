class NameField {
  constructor(name) {
    const field = document.createElement("li");
    field.textContent = name;
    const nameListHook = document.querySelector("#names");
    nameListHook.appendChild(field);
  }
}

class NameGenerator {
  constructor() {
    const btn = document.querySelector("button");
    btn.addEventListener("click", this.addName);
  }

  addName() {
    const name = new NameField("Max");
  }
}

const gen = new NameGenerator();

// https://academind.com/tutorials/this-keyword-function-references

/* 
    - Constructor functions are normal functions that we can call to create a new object and
        initialise them with some properties and methods.
    - We need the concept of objects to understand 'this'
        
    - btn.addEventListener('click', addName());
        This is wrong as JS will look for a variable/function called addName in the scope of
        constructor, and if not there, in the global scope. As we got no addName variable in the
        entire window, so gives an error [addName is not defined]
        
    - this essentially refers to the current object the code is in

    - this.addName() - wrong
        addName'()' would actually not wait for the click to occur but instead also execute right when the code is first parsed/ executed.

    - What do you do when you want to make sure your friend can visit your parents once he's done with his work for the day?

        You don't send him there immediately - instead you tell him where your parents live. This allows your friend to visit them once he got the time. You basically give your friend the address of your parents instead of taking him with you.

        The same concept can be used in JavaScript. You can "give JavaScript/ the Browser" the address of something (=> a function) instead of executing it manually right away.

        This is done by passing a so called "reference". (passing the address to the function)

    - Arrow functions solve the problem of this behaving differently. (check video in URL)    

*/
