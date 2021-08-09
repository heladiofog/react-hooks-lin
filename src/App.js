import React, {useState} from 'react';
import './App.css';

function App() {
  const [status, setStatus] = useState('Not delivered');

  return (
    <div className="App">
      <h1>The package is:</h1>
      <h2>{status}</h2>
      <div>
        <button onClick={() => setStatus("Delivered")}>
          Deliver
        </button>
      </div>
    </div>
  );
}

export default App;
