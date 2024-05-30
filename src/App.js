import { useFetch } from './useFetch';
const baseUrl = 'https://jsonplaceholder.typicode.com';

const App = () => {
  const { data: userData } = useFetch(baseUrl, 'users');
  const { data: postData } = useFetch(baseUrl, 'posts');
  const { data: todoData } = useFetch(baseUrl, 'todos');
  return (
    <div>
      <h1>user</h1>
      {userData && <pre>{JSON.stringify(userData[0], null, 2)}</pre>}
      <h1>post</h1>
      {postData && <pre>{JSON.stringify(postData[0], null, 2)}</pre>}
      <h1>todo</h1>
      {todoData && <pre>{JSON.stringify(todoData[0], null, 2)}</pre>}
    </div>
  );
};

export default App;
