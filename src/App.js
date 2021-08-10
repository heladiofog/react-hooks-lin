import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // Consuming an API
  const [data, setData] = useState([]);

  // Effects
  useEffect(() => {
    fetch(`https://api.github.com/users`)
      .then(response => response.json())
      // .then(json => setData(json))
      .then(setData); // A kind of a shortcut of the above statement
  }, []); // It could fire an infinite chain of calls, it should be controlled by the dependency array correctly!!

  if (data) {
    return (
      <>
        <h1>API consuming:</h1>
        <h2>https://api.github.com/users</h2>
        <p>Users (login field)</p>
        <ul>
          {data.map((user) => (
            <li key={user.id}>{user.login}</li>
          ))}
        </ul>
        <button onClick={() => setData([])}>Remove Data</button>
      </>
    );
  }

  return (
    <div className="App">
      <h1>API Consuming -finally-</h1>
      <p>No users yet!</p>
    </div>
  );
}

export default App;
