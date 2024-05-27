import React, { useRef, useEffect } from 'react';
import Input from './components/Input';

function App() {
  const inputRef = useRef();

  const focus = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <Input ref={inputRef} />
      <button onClick={focus}>집중</button>
    </>
  );
}

export default App;
