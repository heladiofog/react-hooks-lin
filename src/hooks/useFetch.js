// Cases:
// If the data isn't available yet but is loading
// if we get the data
// if there's an error
import { useState, useEffect } from "react";

export function useFetch(uri) {
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