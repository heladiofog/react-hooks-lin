import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Share values to be available through the components tree
// These values are passed down with react context
export const TreesContext = createContext();

// Trees example to be accessible to our entire app
const trees = [
  { id: "1", type: "Maple" },
  { id: "2", type: "Oak" },
  { id: "3", type: "Family" },
  { id: "4", type: "Components" },
  { id: "5", type: "Mango" },
];

ReactDOM.render(
  <React.StrictMode>
    <TreesContext.Provider value={{ trees }} >
    <App name="Lin"/>
    </TreesContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
