import React,{ useCallback, useState } from "react";

// Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions. Use useCallback to ensure that these functions are not recreated on every render.

export function Assignment1() {
  const [count, setCount] = useState(0);

  // Your code starts here


  /* 
        Prob1:
        In this approach only one problem was there that it is not taking the current value of the 
        count.
  */

//   const handleIncrement = useCallback(()=>{
//     setCount(count+1);
//   }, []);

//   const handleDecrement = useCallback(()=>{
//     setCount(count+1);
//   }, []);


/* 
        Prob2: 
        In this approach I solved the Prob1, now it is taking the current value of the count,
        but now the button component is re-rendering every time the count changes, it should not happen
        because the count is the state variable of the Assignment 1 component, why CounterButtons component
        is re-rendering.
*/

//   const handleIncrement = useCallback(() => {
//     setCount(count + 1);
//   }, [count]);

//   const handleDecrement = useCallback(() => {
//     setCount(count - 1);
//   }, [count]);


/*
        SOlUTION: 
        It is solving both Prob1 and Prob2: 


*/

    const handleIncrement = useCallback(()=>{
        setCount(c => c+1);
    }, []);

    const handleDecrement = useCallback(()=>{
        setCount(c=>c-1);
    }, []);

  // Your code ends here

  return (
    <div>
      <p>Count: {count}</p>
      <CounterButtons
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    </div>
  );
}

const CounterButtons = React.memo(({ onIncrement, onDecrement }) => {
  console.log("re-render-counter");
  return (
    <div>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </div>
  );
});
