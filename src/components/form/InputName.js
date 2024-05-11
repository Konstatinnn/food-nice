import React, { useState } from 'react';
import InputError from './InputError';
import './Input.scss';

const InputName = () => {
  const [name, setName] = useState('');
  const [checkValidName, setcheckValidName] = useState(false);
  const [shadowOftheInput, setshadowOftheInput] = useState('');

  const checkNameHandler = (e) => {
    console.log(123);
    if (e.target.value.length < 3) {
      setcheckValidName(true);
      setshadowOftheInput('input__error');
      return;
    }
    setcheckValidName(false);
    setshadowOftheInput('input__correct');
  };

  return (
    <div className="input">
      <label className="input__label">
        Ваше имя
        <input
          className={`input__input ${shadowOftheInput}`}
          placeholder="Имя"
          onChange={checkNameHandler}
        />
      </label>
      {checkValidName && (
        <InputError>Имя должно содержать не менее 3 символов</InputError>
      )}
    </div>
  );
};

export default InputName;
