import { useState } from 'react';

export const useInput = (initialValue, submitAction) => {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = () => {
    submitAction(inputValue);
    setInputValue('');
  };

  return [inputValue, handleChange, handleSubmit];
};
