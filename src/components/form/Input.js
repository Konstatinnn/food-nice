import React, { useState, useEffect } from 'react';
import InputError from './InputError';
import './Input.scss';

const Input = ({ type, placeholder, label, errorText, checkIsInputValid }) => {
  const [inputValue, setinputValue] = useState('');
  const [isInputValueValid, setisInputValueValid] = useState(false);
  const [showingShadowOfError, SetShowingShadowOfError] = useState(false);
  const [WhichShadowToShow, setWhichShadowToShow] = useState('');

  const whenTheInputIsCorrect = () => {
    SetShowingShadowOfError(false);
    setWhichShadowToShow('input__correct');
    setisInputValueValid(true);
  };

  const whenTheInputIsWrong = () => {
    SetShowingShadowOfError(true);
    setisInputValueValid(false);
    setWhichShadowToShow('input__error');
  };

  useEffect(() => {
    if (isInputValueValid) checkIsInputValid(isInputValueValid, inputValue);
  }, [inputValue, isInputValueValid]);

  const checkInputValid = (e) => {
    setinputValue((prev) => e.target.value);

    switch (type) {
      case 'email':
        if (e.target.value.includes(' ') || !e.target.value.includes('@')) {
          whenTheInputIsWrong();
          return;
        }
        whenTheInputIsCorrect();
        break;
      case 'password':
        if (e.target.value.length < 5) {
          whenTheInputIsWrong();
          return;
        }
        whenTheInputIsCorrect();
        break;
      case 'name':
        if (e.target.value.length < 3) {
          whenTheInputIsWrong();
          return;
        }
        whenTheInputIsCorrect();
        break;
    }
  };

  return (
    <div className="input">
      <label className="input__label">
        {label}
        <input
          required
          className={`input__input ${WhichShadowToShow}`}
          placeholder={placeholder}
          onChange={checkInputValid}
          value={inputValue}
        />
      </label>
      {showingShadowOfError && <InputError>{errorText}</InputError>}
    </div>
  );
};

export default Input;
