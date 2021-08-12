import Spinner from './Spinner';
import { useFetchYTVideos } from '../hooks/useFetchYTVideos';

export default function YTVideos() {
  // Try to fetch the videos
  
  const { isLoading, data, error } = useFetchYTVideos();

  // data is loading
  if (isLoading) {
    return <h2>Loading user...</h2>;
  }

  return (
    <>
      <h1>Youtube Search</h1>
      <main>
        <h3>Videos coming soon...</h3>
        <div>
          <Spinner />
        </div>
      </main>
    </>
  );
}