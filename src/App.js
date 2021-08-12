import React from 'react';
import './App.css';
import GithubUser from './components/GithubUser';
// Youtube part
import Spinner from './components/Spinner';
import { useGoogleApi } from './hooks/useGoogleApi';
import YTVideos from './components/YTVideos';

// How to fetch data with a custom hook
function App() {
  // Loading the google api
  const gapi = useGoogleApi();
  // console.log("is loaded the google API?: " + !!gapi);
  if (!gapi) {
    return (
      <div>
        <h2>Wait for it!</h2>
        <Spinner />
      </div>
    );
  }
  console.log(gapi);
  return (
    <div className="App">
      <YTVideos />
      <h2>Fetching data from an API with a custom hook</h2>
      <GithubUser login={'heladiofog'} />
    </div>
  );
}

export default App;
