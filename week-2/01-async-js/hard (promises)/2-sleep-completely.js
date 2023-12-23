/*
 * Write a function that halts the JS thread (make it busy wait) for a given number
 of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 * 
 
 It was given Like this, I have made some changes: 

 function sleep(milliseconds) {
 }

module.exports = sleep;
 */

function sleep(milliseconds) {
    return new Promise((resolve, reject)=>{
        let firstTime = new Date().getTime();
        let passedTime = 0
        while(passedTime < milliseconds){
            passedTime = new Date().getTime() - firstTime;
        }
        resolve();
    })
}

module.exports = sleep;

{
    /* 
        This is my approach, but I understood properly: 
        -> If I want to resolve the promise after 10 second i will use the seTimeout
           but here is the catch : in this question main-thread means call stack must
           be blocked which means we have to run some command (loops) in the call stack
           for the provided provided milisecond.
           logic: 
           1. for every loop I am checking that when I have entered the loop from there
           how much time have passed for every loop and updating the passedTime. and if the 
           passed time is >= the given time then only I will go out of the loop so that mean
           main thread is stuck there for provided milisecond.
    */
}
