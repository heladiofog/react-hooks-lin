import { useState, useEffect } from 'react';
// This hook only charges the gapi client
function useGoogleApi() {
  const [googleApi, setGoogleApi] = useState(null);

  useEffect(() => {
    // From Youtube docs sample codes...
    function start() {
      // 2. Initialize the JavaScript client library.
      window.gapi.client.init({
        'apiKey': process.env.REACT_APP_YOUTUBE_API_KEY,
        // clientId and scope are optional if auth is not required.
        // 'clientId': 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com',
        'scope': 'profile',
      }).then(function () {
        // 3. Initialize and make the API request.
        return window.gapi.client.request({
          'path': 'https://people.googleapis.com/v1/people/me?requestMask.includeField=person.names',
        })
      }).then(function (response) {
        console.log(response.result);
      }, function (reason) {
        console.log('Error: ' + reason.result.error.message);
      });
    };
    // My implementation
    function loadClient() {
      // Setting API Key
      window.gapi.client.setApiKey(process.env.REACT_APP_YOUTUBE_API_KEY);

      return window.gapi.client
        .load('https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest')
        .then(
          () => {
            console.log('GAPI client loaded for API');
            setGoogleApi(window.gapi);
          },
          (err) => {
            console.error('Error loading GAPI client for API:', err);
          }
        );
    }
    // loading Google Api
    // 1. Load the JavaScript client library.
    window.gapi.load('client', loadClient);
  }, []); // este efecto se debe llamar solo una vez...

  return googleApi;
}

export { useGoogleApi };
