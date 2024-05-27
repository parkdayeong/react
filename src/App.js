import React, { useMemo, useState } from 'react';

const hardCalculate = (number) => {
  console.log('hard calculate');
  for (let i = 0; i < 9999999; i++) {} //생각하는시간
  return number + 10000;
};

const easyCalculate = (number) => {
  console.log('easy calculate');
  return number + 1;
};

function App() {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);

  // const hardSum = hardCalculate(hardNumber);
  const hardSum = useMemo(() => {
    return hardCalculate(hardNumber);
  }, [hardNumber]);
  const easySum = easyCalculate(easyNumber);

  return (
    <>
      <h3>어려운계산기</h3>
      <input
        type='number'
        value={hardNumber}
        onChange={(e) => setHardNumber(parseInt(e.target.value))}
      />
      <span> + 10000 = {hardSum}</span>
      <h3>쉬운계산기</h3>
      <input
        type='number'
        value={easyNumber}
        onChange={(e) => setEasyNumber(parseInt(e.target.value))}
      />
      <span> + 1 = {easySum}</span>
    </>
  );
}

export default App;
