import React, { useState } from 'react';
import './Input.scss';
import InputError from './InputError';

const inputEmail = () => {
  const [emailText, setEmailText] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [shadowOftheInput, setshadowOftheInput] = useState('');

  const checkEmailValid = (e) => {
    setEmailText(e.target.value);
    if (e.target.value.includes(' ')) {
      setIsEmailValid(true);
      setshadowOftheInput('input__error');
      return;
    }

    if (e.target.value.includes('@')) {
      setIsEmailValid(false);
      setshadowOftheInput('input__correct');
      return;
    }

    setIsEmailValid(true);
    setshadowOftheInput('input__error');
  };

  const emailLeaveFocus = (e) => {
    if (emailText.includes(' ')) {
      setIsEmailValid(true);
      setshadowOftheInput('input__error');
      return;
    }
    if (emailText.includes('@')) {
      setIsEmailValid(false);
      setshadowOftheInput('input__correct');
    } else {
      setIsEmailValid(true);
      setshadowOftheInput('input__error');
    }
  };

  return (
    <div className="input">
      <label className="input__label">
        Ваш email
        <input
          className={`input__input ${shadowOftheInput}`}
          placeholder="Email"
          onChange={checkEmailValid}
          value={emailText}
          onFocus={emailLeaveFocus}
        />
      </label>
      {isEmailValid && <InputError>Введите корректный Email</InputError>}
    </div>
  );
};

export default inputEmail;
