import React from 'react';
import './App.css';
import GithubUser from './components/GithubUser';

// How to fetch data with a custom hook
function App() {
  return (
    <div className="App">
      <h1>Fetching data from an API with a custom hook</h1>
      <GithubUser login={'heladiofog'} />
    </div>
  );
}

export default App;
