import React, { useEffect, useMemo, useState } from 'react';

function App() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  const location = useMemo(() => {
    return {
      country: isKorea ? '한국' : '외국',
    };
  }, [isKorea]);

  useEffect(() => {
    console.log('useEffect 호출');
  }, [location]);

  return (
    <>
      <h3>하루에 몇끼 먹어요?</h3>
      <input type='number' value={number} onChange={(e) => setNumber(e.target.value)} />
      <p>{number}</p>
      <hr />
      <h3>어느 나라에 있나요?</h3>
      <p>나라: {location.country}</p>
      <button onClick={() => setIsKorea(!isKorea)}>비행기타장</button>
    </>
  );
}

export default App;
