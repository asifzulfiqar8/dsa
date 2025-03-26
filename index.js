// JS closures concept. Closures allow a function to remember the variables from its parent scope even after the parent function has finished executing.

// const counter = () => {
//   let count = 0;

//   return {
//     increament: () => {
//       count++;
//       return count;
//     },
//     decrement: () => {
//       count--;
//       return count;
//     },
//     reset: () => {
//       count = 0;
//       return count;
//     },
//     getCount: () => {
//       return count;
//     },
//   };
// };

// const myCounter = counter();
// myCounter.increament();
// myCounter.increament();
// console.log(myCounter.getCount());

// <<< ---------------------- >>>

// // JS Debouncing function
// const debounce = (func, delay) => {
//   let timeoutId;

//   return (...args) => {
//     // clear the previous timeout from memory
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => {
//       func(...args);
//     }, delay);
//   };
// };

// const logMessage = (text) => console.log(text);

// const debounceLog = debounce(logMessage, 2000);

// debounceLog("debounce");

// <<< ---------------------- >>>
// Throttling Function
function throttle(func, delay) {
  let flag = false;

  return function (...args) {
    if (!flag) {
      func(...args);
      flag = true;

      setTimeout(() => {
        flag = false;
      }, delay);
    }
  };
}

const logMessage = (text) => console.log(text);
const throttLog = throttle(logMessage, 2000);

throttLog("Hello Asif");
throttLog("Hello again Asif");
setTimeout(() => {
  throttLog("Hello once again Asif");
}, 3000);

// <<< ---------------------- >>>
