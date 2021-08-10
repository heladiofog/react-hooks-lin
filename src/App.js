import React, { useState } from 'react';
import './App.css';

// A Controlled Component is another way to handle inputs in a form
// It means that you handle form inputs using state variables.

// Refactoring useRef example into a Controlled component
function App() {
  // components by useRef
  const [sound, setSound] = useState("");
  const [color, setColor] = useState("#000000");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${sound} sounds like ${color}.`);
    // Reset the input fields
    setSound("");
    setColor("#000000");
  }

  return (
    <div className="App">
      <h1>Use of the useRef Hook</h1>
      <p>Fill the inputs in the following form:</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Sound..."
          value={sound}
          onChange={(e) => setSound(e.target.value)}
        />
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
