import React, { useState } from 'react';
import './App.css';
import { FaStar } from 'react-icons/fa';

// Helper function to create an array of stars
const createArray = (length) => [
  ...Array(length)
]

function Star({ selected = false, onSelect }) {
  return <FaStar color={selected ? 'gold' : 'grey'} onClick={onSelect} />;
}

function StarRating({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);
  return(
  <>
    {createArray(totalStars).map((star, i) => (
      <Star
        key={`${i}`}
        selected={selectedStars > i}
        onSelect={() => setSelectedStars(i + 1)}
      />
    ))}
    <p>{selectedStars} of {totalStars}</p>
  </>);
}

function App() {
  return (
    <div className="App">
      <h1>Rating App</h1>
      <h3>Star Trek rating:</h3>
      <StarRating totalStars={10} />
    </div>
  );
}

export default App;
