// Importing React library
import React from "react";
// Importing the main App component
import App from "./App";
// Importing ReactDOM for rendering React components to the DOM
import ReactDOM from "react-dom/client";

/**
 * Entry Point - index.jsx
 * 
 * This is the entry point of the React application
 * It renders the App component into the HTML root element
 */

// Getting the root DOM element (usually <div id="root"></div> from index.html)
// createRoot() is the modern React 18+ way to create a root
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the App component into the root
// React.StrictMode is a development tool that:
// - Identifies potential problems in the application
// - Highlights deprecated APIs
// - Helps detect side effects
// - Only runs in development mode, not in production
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// reportWebVitals(); - Commented out, used for measuring performance metrics
