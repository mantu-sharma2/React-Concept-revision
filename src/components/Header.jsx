/**
 * Header Component - Simple functional component
 * 
 * Demonstrates:
 * - Arrow function component syntax (alternative to function declaration)
 * - Inline styles
 * - Component without props
 * 
 * Note: Arrow functions and function declarations are equivalent in React
 */
const Header = () => {
  return (
    <div>
      {/* Inline styles: React uses camelCase for CSS properties */}
      {/* fontSize instead of font-size, backgroundColor instead of background-color */}
      <h2 style={{ color: "red", fontSize: "50px" }}>This is a Heading</h2>
    </div>
  );
};

// Default export - allows importing as: import Header from "./components/Header"
export default Header;
