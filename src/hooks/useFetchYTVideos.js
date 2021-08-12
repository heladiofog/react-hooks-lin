// https://content-youtube.googleapis.com/youtube/v3/search?part=id&part=snippet&q=wizeline&maxResults=25&key=AIzaSyDRKJLorYEYkVTc9kfMowzFCCSBaXMDAK8
// Cases:
// If the data isn't available yet but is loading
// if we get the data
// if there's an error
import { useState, useEffect } from "react";


export function useFetchYTVideos(uri) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  // const [data, setData] = useState();

  useEffect(() => {
    if (!uri) return;
    // 
    fetch(uri)
      .then(data => data.json())
      .then(setData)
      .then(() => setIsLoading(false))
      .catch(setError);
  }, [uri]);

  return { isLoading, data, error };
}

