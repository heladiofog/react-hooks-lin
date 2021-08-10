import { useFetch } from '../hooks/useFetch';
// Component to display the github user's data
export default function GithubUser({ login }) {
  const uri = `https://api.github.com/users/${login}`;
  const { isLoading, data, error } = useFetch(uri);
  // data is loading
  if (isLoading) {
    return <h2>Loading user...</h2>;
  }
  // There was an error
  if (error) {
    return (
      <>
        <h2>Something's broken!</h2>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </>
    );
  }
  // fetched data arrived
  // console.log(data);
  return (
    <>
      <h2>User {data.login}</h2>
      <div>
        <p>{data.name && data.name}</p>
        <p>{data.location && data.location}</p>
        <img src={data.avatar_url} alt={data.login} />
      </div>
      <div>
        {/* Data format preview */}
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      </div>
    </>
  );
}