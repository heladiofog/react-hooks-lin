import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('Lin');

  // UseEffect example, it runs after each render!! in every object
  useEffect(() => {
    document.title = `Celebrate ${name}`;
  });

  return (
    <div className="App">
      <section>
        <h1>Congratulations {name}!</h1>
        <button onClick={() => setName("Tezca")}>Change Winner name</button>
      </section>
    </div>
  );
}

export default App;
