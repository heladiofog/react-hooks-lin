import React, { useRef } from 'react';
import './App.css';

// A hook pretty important is the:  useRef
// It will allow us to reach out to a component and determine its value
// It is extremely useful particularly with forms


function App() {
  // components by useRef
  const sound = useRef();
  const color = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const soundValue = sound.current.value;
    const colorValue = color.current.value;
    alert(`${soundValue} sounds like ${colorValue}.`);
    sound.current.value = "";
    color.current.value = "#000000";
  }

  return (
    <div className="App">
      <h1>Use of the useRef Hook</h1>
      <p>Fill the inputs in the following form:</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Sound..." ref={sound} />
        <input type="color" ref={color} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
