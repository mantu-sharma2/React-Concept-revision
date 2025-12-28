// Importing components and context
import Body from "./components/Body";
import Header from "./components/Header";
import { BodyContext } from "./Context";

/**
 * App Component - Main application component
 * Demonstrates:
 * - Component composition
 * - Props passing
 * - Context API usage
 */
function App() {
  // Local state/data for props - passed down to child components
  const bodyContent = "This is the body component using props.";

  // Data to be shared via Context API (alternative to props drilling)
  const counterContent = "This is the data from context for counter component";

  return (
    <div className="App">
      <header className="App-header">
        {/* Inline styles using JavaScript object syntax */}
        <h1 style={{ textAlign: "center", backgroundColor: "lightblue" }}>
          React Project Title
        </h1>

        {/* Rendering Header component - no props passed */}
        <Header />

        {/* Body component with props - demonstrates prop passing */}
        {/* Props allow parent to pass data to child components */}
        <Body bodyContent={bodyContent} />

        {/* Visual separator div with inline styles */}
        <div
          style={{
            marginTop: "20px",
            height: "10px",
            border: "1px solid pink",
            backgroundColor: "lightgrey",
          }}
        ></div>

        {/* Context Provider - wraps components that need access to context */}
        {/* value prop provides data to all child components */}
        {/* This avoids "props drilling" (passing props through multiple levels) */}
        <BodyContext.Provider value={counterContent}>
          {/* Body component inside context provider can access context */}
          {/* This Body will receive context data, not props */}
          <Body />
        </BodyContext.Provider>
      </header>
    </div>
  );
}

// Default export - allows importing as: import App from "./App"
export default App;
