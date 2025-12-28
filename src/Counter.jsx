// Importing React hooks: useState for state management, useContext for context
import React, { useState } from "react";
import { useContext } from "react";
// Importing the context we created
import { BodyContext } from "./Context";

/**
 * Counter Component - Demonstrates React Hooks
 * 
 * Concepts demonstrated:
 * - useState Hook: Manages component state
 * - useContext Hook: Accesses context data
 * - Event handlers: onClick events
 * - State updates: setState function
 */
export default function Counter() {
  // useState Hook: Creates state variable 'counter' with initial value 0
  // setCounter is the function to update the state
  // When state changes, React re-renders the component
  const [counter, setCounter] = useState(0);
  
  // useContext Hook: Accesses data from BodyContext
  // Returns the value provided by the nearest Context.Provider
  // If no provider exists, returns null (the default value)
  const content = useContext(BodyContext);
  
  // Event handler function for increment button
  // Updates state using setCounter function
  const handleIncrement = () => {
    const temp = counter + 1; // Calculate new value
    setCounter(temp); // Update state - triggers re-render
  };
  
  // Event handler function for decrement button
  const handleDecrement = () => {
    const temp = counter - 1; // Calculate new value
    setCounter(temp); // Update state - triggers re-render
  };
  
  return (
    <div>
      {/* Displaying context content - will show null if no provider wraps this component */}
      {/* Note: <p1> is not a valid HTML tag, should be <p> but kept as is for demonstration */}
      <p1>
        <b>{content}</b>
      </p1>
      
      <div>
        {/* Button with onClick event handler */}
        {/* onClick expects a function reference (not a function call) */}
        {/* Inline styles for button styling */}
        <button
          onClick={handleDecrement}
          style={{ backgroundColor: "orange", color: "blue" }}
        >
          Decrement
        </button>
        
        {/* Displaying current counter state value */}
        <p>Counter value: {counter}</p>
        
        {/* Button with onClick event handler */}
        <button
          onClick={handleIncrement}
          style={{ backgroundColor: "orange", color: "blue" }}
        >
          Increment
        </button>
      </div>
    </div>
  );
}
