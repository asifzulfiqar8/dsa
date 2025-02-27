// JS closures concept. Closures allow a function to remember the variables from its parent scope even after the parent function has finished executing.

const counter = () => {
  let count = 0;

  return {
    increament: () => {
      count++;
      return count;
    },
    decrement: () => {
      count--;
      return count;
    },
    reset: () => {
      count = 0;
      return count;
    },
    getCount: () => {
      return count;
    },
  };
};

const myCounter = counter();
// myCounter.increament();
// myCounter.increament();
// myCounter.increament();
// myCounter.reset();
// myCounter.decrement();
// myCounter.increament();
// myCounter.increament();
// console.log(myCounter.getCount());
