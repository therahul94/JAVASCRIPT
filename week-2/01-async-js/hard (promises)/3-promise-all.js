/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 

Question was like this: 

function wait1(t) {
  
}

function wait2(t) {
  
}

function wait3(t) {
 
}

function calculateTime(t1, t2, t3) {
 
}

module.exports = calculateTime;


 */

function wait1(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(t);
    }, t * 1000);
  });
}

function wait2(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(t);
    }, t * 1000);
  });
}

function wait3(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(t);
    }, t * 1000);
  });
}

function calculateTime(t1, t2, t3) {
  return new Promise((resolve, reject) => {
    let startingTime = new Date().getTime();
    Promise.all([wait1(t1), wait2(t2), wait3(t3)]).then((arr) => {
      console.log(arr);
      let currentTime = new Date().getTime();
      console.log(currentTime - startingTime);
      resolve(currentTime - startingTime);
    });
  });
}

module.exports = calculateTime;


{/* 
  In calculateTime function we are passing the t1, t2 , t3 time, and we expect that
  wait1, wait2, wait3 will be resolved after provided time.
  Now when we want to call more than one function which are going to return promise,
  then we use promise.all() .

  Promise.all(): The Promise.all() static method takes an iterable of promises as
                 input and returns a single Promise. This returned promise fulfills
                 when all of the input's promises fulfill (including when an empty
                 iterable is passed), with an array of the fulfillment values. 
                 It rejects when any of the input's promises rejects, with this first
                 rejection reason.
  so as per definition all() function is defined in the Promise class, which takes
  an iterable of promises as input and return a single Promise.
  now that returned single promise is going to resolve, but when? the answer is
  that single promise is going to resolve when all the iterable promise which we have
  passed is being resolved if any one of them is rejected then this single promise also
  get rejected. 
*/}
