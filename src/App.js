import React from 'react';
import './App.css';
import { useInput } from './hooks/useInput';
// Extract/abstract logic into a Custom hook.
// Refactoring the Controlled component example into a "hook-controlled component"
function App() {
  // Instead of using inputs, we're going to use the input hook
  const [soundProps, resetSound] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${soundProps.value} sounds like ${colorProps.value}.`);
    // Reset the input fields
    resetSound("");
    resetColor("#000000");
  }

  return (
    <div className="App">
      <h1>Use of a Controlled component and a Custom Hook</h1>
      <p>Fill the inputs in the following form:</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Sound..."
          // These two props will be replaced for the provided ones by the hook
          // value={sound}
          // onChange={(e) => setSound(e.target.value)}
          {...soundProps}
        />
        <input
          type="color"
          // These two props will be replaced for the provided ones by the hook
          // value={color}
          // onChange={(e) => setColor(e.target.value)}
          {...colorProps}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
