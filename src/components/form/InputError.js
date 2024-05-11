import React from 'react';
import './InputError.scss';

const InputError = (props) => {
  return <p className="error">{props.children}</p>;
};

export default InputError;
