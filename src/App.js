import React from 'react';
import './App.css';
import { useTrees } from './';  // index file

function App() {
  // Refactoring the sharing of the context by a custom hook
  const { trees } = useTrees();
  // console.log(trees);
  return (
    <div className="App">
      <h1>Use of Context to share some values</h1>
      <h2>Trees I've heard of:</h2>
      <ul>
        {trees.map(tree => (<li key={tree.id}>{tree.type}</li>))}
      </ul>
    </div>
  );
}

export default App;
