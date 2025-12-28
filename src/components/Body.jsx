// Importing Counter component from parent directory
import Counter from "../Counter";

/**
 * Body Component - Demonstrates props and component composition
 * 
 * @param {string} bodyContent - Content passed as prop from parent component
 * 
 * Concepts:
 * - Functional component with props destructuring
 * - Component composition (using Counter inside Body)
 * - Conditional rendering based on props
 */
export default function Body({ bodyContent }) {
  return (
    <div>
      {/* Conditional rendering: only show paragraph if bodyContent prop exists */}
      {/* Props allow parent components to pass data to child components */}
      {bodyContent && (
        <p style={{ color: "blue", fontSize: "20px" }}>{bodyContent}</p>
      )}
      
      {/* Component composition - Counter is a child component of Body */}
      {/* Counter will access context if Body is wrapped in Context.Provider */}
      <Counter />
    </div>
  );
}
