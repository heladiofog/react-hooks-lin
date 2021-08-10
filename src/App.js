import React, { useReducer } from 'react';
import './App.css';

function App() {
  // Using useReducer, which is usually preferable than useState
  const [number, setNumber] = useReducer(
    (number, newNumber) => number + newNumber,     // reducer function that returns a new state
    0           // Initial State
  );

  return (
    <div className="App">
      <h1>Using useReducer</h1>
      <p>Click on the number: <span style={{'fontWeight': 'bold'}} onClick={() => setNumber(1)}>{number}</span></p>
    </div>
  );
}

export default App;
