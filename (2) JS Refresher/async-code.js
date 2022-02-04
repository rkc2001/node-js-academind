// setTimeout() - function built into Node.js wherein we define a function that should execute after certain timer expired
setTimeout(() => {
  console.log("Timer1 is done !");
}, 5000);

// This is an asynchronous code as it does not finish immediateley even if time is 1ms (we see delay)
console.log("Hello");
console.log("Hi");

/**
 * Node.js and JS in general does not block code execution until setTimeout() is done
 * It recognizes the callback function (function should execute in the future - it should call back later) once timer finishes
 * JS recognizes the timer and immediately moves on to the next line and will execute all the synchronous code and then executes async code, once timer is over
 */

// Callback functions are one way(older method) to handle async code
// We may face a problem if we have a couple of depending operation -

// We're creating our own function which gets a callback so that we can define a function which should execute once this inner timer is done from some other place i.e. [(text) => { ... }] this entire function is passed in as a callback
const fetchData = (callback) => {
  setTimeout(() => {
    callback("Done!");
  }, 1500);
};

setTimeout(() => {
  console.log("Timer2 is done");
  fetchData((text) => {
    console.log(text);
  });
}, 2000);
