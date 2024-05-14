import React from 'react';
import './Btn.scss';

const Button = ({ text, parentClass, onClick, disabled }) => {
  // console.log(disabled);
  return (
    <button
      disabled={!disabled}
      onClick={onClick}
      className={`btn ${parentClass}`}
    >
      {text}
    </button>
  );
};

export default Button;
