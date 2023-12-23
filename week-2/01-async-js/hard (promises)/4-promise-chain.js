/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 
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
    wait1(t1).then((data) => {
      wait2(t2).then((data)=>{
        wait3(t3).then((data)=>{
            let endTime = new Date().getTime();
            resolve(endTime-startingTime)
        })
      })
    });
    

  });
}

module.exports = calculateTime;


{/* 

    wait2 is depending on the wait1 , wait 3 is depending on the wait 2 and then 
    resolve, so if we compare it with 3-promise-all.js file, both are doing same
    thing only end result is after result of all three promises but when we are 
    using Promise.all() it is much faster because it calls all the fucntions 
    simultaneously , but in this file we are calling it one by one because we are 
    waiting to resolve every function and then we are giving the end result.

    Promise.all()  (3-promise-all.js logic)      |        normal (this file logic)
  -------------------------------------------------------------------------------------
    1. let say we have called wait1(7),          |  let say we have called wait1(7),              
       wait2(10) and wait3(4) seconds then       |  wait2(10) and wait3(4) seconds then 
       total time for resolving will be the      |  I am waiting for wait1(7) to complete
       highest time which is 10 means in 10 sec  |  for 7 second and then for wait2(10) for
       all promises is being resolved.           |  10 second, then for wait3(4) for
                                                 |  4 second, after that we are resolving
                                                 |  so total time is 7+10+4 = 21 seconds, but
                                                 |  there in 3-promise-all.js it is only 10 sec



 */}        
