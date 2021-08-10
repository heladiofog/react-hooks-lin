import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('Lin');
  const [isAdmin, setIsAdmin] = useState(false);

  // UseEffect example, it runs after each render!! in every object
  useEffect(() => {
    // document.title = `Celebrate ${name}`;
    console.log(`Celebrate ${name}`)
  }, [name]); // If the array is empty, the effect only fires once, on first render

  // We just want the isAdmin value change to fire the related effect
  useEffect(() => {
    console.log(`The user is: ${isAdmin ? 'Admin' : 'No admin'}`);
  } ,[isAdmin]);

  return (
    <div className="App">
      <section>
        <h1>Congratulations {name}!</h1>
        <button onClick={() => setName("Tezca")}>Change Winner name</button>
      </section>

      <p>{isAdmin ? "Logged In": "Not Logged In" }</p>
      <button onClick={() => setIsAdmin(true)}>Log In</button>
    </div>
  );
}

export default App;
