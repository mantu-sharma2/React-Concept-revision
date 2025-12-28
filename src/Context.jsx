// Importing createContext from React
import { createContext } from "react";

/**
 * Context Creation - React Context API
 * 
 * createContext() creates a context object that can be used to share data
 * between components without passing props through every level (props drilling)
 * 
 * - BodyContext is the context object
 * - null is the default value (used when component is not wrapped in Provider)
 * - Exported so other components can import and use it
 */
export const BodyContext = createContext(null);
