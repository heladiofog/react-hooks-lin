import React, { useReducer } from 'react';
import './App.css';

// Another just a little more complex example with useReducer Hook
// Initial State:
const initialState = {
  message: 'You say YES, I say NO...'
};
// The reducer function takes in a state (the PREVIOUS STATE) and an action...
// And it returns a new state!! :O
// The real benefit of having access to the previous state is that we can use it!!
function reducer(state, action) {
  switch (action.type) {
    case 'hello':
      return {
        message: `I don't know why i said "Hello, hello!" ${state.message}`
      };
    case 'bye':
      return {
        message: `I don't know why i said "Goodbye, goodbye!" ${state.message}`
      };
    default:
      return {
        message: "by The Beatles"
      };
  }
};

function App() {
  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div className="App">
      <h1>Hello goodbye with useReducer:</h1>
      <p>{state.message}</p>
      <div>
        <button onClick={() => dispatch({ type: 'hello' })}>Hello</button>
        <button onClick={() => dispatch({ type: 'bye' })}>Bye</button>
        <button onClick={() => dispatch({ type: null })}>Clear..</button>
      </div>
    </div>
  );
}

export default App;
