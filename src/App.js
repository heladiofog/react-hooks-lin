import React, { useContext } from 'react';
import './App.css';
import { TreesContext } from './';  // index file

function App() {
  // const treesContext = useContext(TreesContext);
  const { trees } = useContext(TreesContext);
  // console.log(trees);
  return (
    <div className="App">
      <h1>Use of Context to share some values</h1>
      <h3>Trees I've heard of:</h3>
      <ul>
        {trees.map(tree => (<li key={tree.id}>{tree.type}</li>))}
      </ul>
    </div>
  );
}

export default App;
