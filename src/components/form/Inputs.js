import React, { useState } from 'react';
import './Inputs.scss';
import InputEmail from './InputEmail';
import InputPass from './InputPass';
import InputName from './InputName';

const Inputs = ({ parentClass }) => {
  return (
    <div className={`inputs ${parentClass}`}>
      <InputEmail />
      <InputPass />
      <InputName />
    </div>
  );
};

export default Inputs;
