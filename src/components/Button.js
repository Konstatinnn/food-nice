import React from 'react';
import './Btn.scss';

const Button = ({ text, parentClass, onClick }) => {
  return (
    <button onClick={onClick} className={`btn ${parentClass}`}>
      {text}
    </button>
  );
};

export default Button;
