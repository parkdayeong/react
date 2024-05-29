import React, { useState, useReducer } from 'react';
import { indexInitialState, ACTION_TYPES, reducer } from './reducer/indexReducer';

const App = () => {
  const [state, dispatch] = useReducer(reducer, indexInitialState);

  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: ACTION_TYPES.CHANGE_TO_KOR });
        }}
      >
        한글
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTION_TYPES.CHANGE_TO_ENG });
        }}
      >
        English
      </button>
      <div>{state.text}</div>
      <button
        onClick={() => {
          dispatch({ type: ACTION_TYPES.PLUS_COUNT });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTION_TYPES.MINUS_COUNT });
        }}
      >
        -
      </button>
      <div>{state.count}</div>
    </div>
  );
};

export default App;
