import React, { useReducer } from 'react';
import './App.css';

function App() {
  // Refactoring this functionality with useReducer instead:
  // const [checked, setChecked] = useState(false);
  // into:
  const [checked, toggle] = useReducer(
    (checked) => !checked,
    false
  )

  return (
    <div className="App">
      <h1>The package is:</h1>
      <input
        type="checkbox"
        value={checked}
        // A little enhancement for the value setting
        // onChange={() => setChecked(checked => !checked)}
        // New chang logic handled by useReducer hook
        onChange={toggle}
      />
      <p>{checked ? "Checked" : "not checked"}</p>
    </div>
  );
}

export default App;
