import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users');
  }, []);

  return (
    <div>
      <h1>useFetch</h1>
    </div>
  );
};

export default App;
