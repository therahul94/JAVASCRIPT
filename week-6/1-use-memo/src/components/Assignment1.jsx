import { useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.


//What I Understood: 
/* 
    Even though the Counter is changing and causing re-rendering because the count
    state is changing, but the factorial is not calling itself many times 
    (expensive operation) in every re-render , it is calling itself only when the 
    number is changing, which we have given in the dependancy array.

*/
export function Assignment1() {
    const [input, setInput] = useState(0);
    const [count, setCount] = useState(0);
    // Your solution starts here
    let expensiveValue = 0; 
    expensiveValue = useMemo(function fact(){
        console.log('usememo calling')
        // base condition
        // if(input===0 || input===1) return input;
        // return fact(input-1)*fact(input-2);
        let value=1;
        for(let i=input; i>1; i--){
            value*=i;
        }
        
        return value;
    },[input]);

    // Your solution ends here

    return (
        <div>
            <input 
                type="number" 
                value={input} 
                onChange={(e) => setInput(Number(e.target.value))} 
            />
            <p>Calculated Value: {expensiveValue}</p>
            <button onClick={()=>setCount(count+1)}>Counter({count})</button>
        </div>
    );
}