import React, { useState, useCallback } from "react";

// Create a component with a text input field and a button. The goal is to display an alert with the text entered when the button is clicked. Use useCallback to memoize the event handler function that triggers the alert, ensuring it's not recreated on every render.
// Currently we only have inputText as a state variable and hence you might not see the benefits of
// useCallback. We're also not passing it down to another component as a prop which is another reason for you to not see it's benefits immedietely.


/*
    what I understood: 
    For checking the callback is really working or not, In the parent directory which is app.jsx 
    I have given one state and in setInterval, in every 10 second it is changing the state and 
    causing the re-rendering all the child component.
    so in this Assignment2 component, if I dont use the useCallback then even though the showAlert fn
    has not changed but the button component is re-rendering even though the showAlert function which 
    is prop to the button component is not changing(because we have used the React.memo()).

    so whenever there is re-render the function might be the same but the functions address gets changed
    and the child component like button component where the function is being passed as the prop, thinks
    that the function is changed ,but in reality the function is still the same only its address got
    changed.
    so to prevent re-rendering we wrap the function inside the useCallback.

*/
export function Assignment2() {
  const [inputText, setInputText] = useState("");

  // Your code starts here
    const showAlert = useCallback(() => {
      return alert(inputText);
    }, [inputText]);
//   function showAlert() {
//     return alert(inputText);
//   }
  // Your code ends here

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter some text"
      />
      <Alert showAlert={showAlert} />
    </div>
  );
}

const Alert = React.memo(({ showAlert }) => {
  console.log("re-render");
  return <div><button onClick={showAlert}>Show Alert</button></div>;
});
