import React, { useState } from 'react';
import './Input.scss';
import InputError from './InputError';
const InputPass = () => {
  const [pass, setPass] = useState('');
  const [checkValidPass, setcheckValidPass] = useState(false);
  const [shadowOftheInput, setshadowOftheInput] = useState('');

  const ValidatePass = (e) => {
    if (e.target.value.length < 5) {
      setcheckValidPass(true);
      setshadowOftheInput('input__error');
      return;
    }
    setcheckValidPass(false);
    setshadowOftheInput('input__correct');
  };

  return (
    <div className="input">
      <label className="input__label">
        Ваш пароль
        <input
          className={`input__input ${shadowOftheInput}`}
          placeholder="Пароль"
          onChange={ValidatePass}
        />
      </label>
      {checkValidPass && (
        <InputError>Пароль должен содержать не менее 5 символов</InputError>
      )}
    </div>
  );
};

export default InputPass;
