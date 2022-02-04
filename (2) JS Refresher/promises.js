// If we have a couple of nested async calls as we had in previous example, we go deeper and deeper from a callback perspective, and that is why we have a feature called promises that we can use in Node.

// Third-party packages already use promises for us.
const fetchData = () => {
  // resolve - completes the promise successfully, reject - rejects/throws an error
  const promise = new Promise((resolve, reject) => {
    // move async code here
    setTimeout(() => {
      resolve("Done!"); // successfully return the resolve value
    }, 1500);
  });
  return promise;
};

setTimeout(() => {
  console.log("Timer is done");
  fetchData().then((text) => {
    console.log(text);
  });
}, 2000);

/**
 * return promise - this is synchronous code, so this will be returned immediately after the promise gets created before the code in the promises run, which will happen sometime later, when we actually call the fetchData function and the timeout completes.
 *
 * Now, where we call fetchData, we no longer pass callback, but use .then() that is callable on a promise wherein we define a callback function that executes once the promise is resolved.
 */
