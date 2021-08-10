import React, {useState} from 'react';
import './App.css';

function App() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="App">
      <h1>The package is:</h1>
      <input 
        type="checkbox"
        value={checked}
        // A little enhancement for the value setting
        onChange={() => setChecked(checked => !checked)}
      />
      <p>{checked ? "Checked" : "not checked"}</p>
    </div>
  );
}

export default App;
