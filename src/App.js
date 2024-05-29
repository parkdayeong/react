import React, { useCallback, useState } from 'react';
import Child from './components/Child';

const App = () => {
  const [parentAge, setParentAge] = useState(0);

  const incrementParentAge = () => {
    setParentAge(parentAge + 1);
  };

  console.log('👨‍👩‍👦부모 컴포넌트가 렌더링이 되었어요');

  const tellMe = useCallback(() => {
    console.log('😻콩이 사랑해');
  }, []);

  return (
    <div style={{ border: '2px solid navy', padding: '10px' }}>
      <h1>👨‍👩‍👦 부모</h1>
      <p>age: {parentAge}</p>
      <button onClick={incrementParentAge}>부모나이증가</button>
      <Child name={'콩이'} tellMe={tellMe} />
    </div>
  );
};

export default App;
