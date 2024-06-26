import React from 'react';

const Students = ({ name, dispatch, id, isHere }) => {
  return (
    <div>
      <span
        style={{
          textDecoration: isHere ? 'line-through' : 'none',
          color: isHere ? 'gray' : 'black',
          cursor: 'pointer',
        }}
        onClick={() => {
          dispatch({ type: 'mark-student', payload: { id } });
        }}
      >
        {name}
      </span>
      <button
        onClick={() => {
          dispatch({ type: 'delete-student', payload: { id } });
        }}
      >
        삭제
      </button>
    </div>
  );
};

export default Students;
