import React, { useEffect, useId, useState } from 'react';
import './Inputs.scss';
import Input from './Input';

const Inputs = ({ parentClass, validationsInputs, getInputsData }) => {
  const [validForm, setValidForm] = useState({
    emailValid: false,
    passValid: false,
    nameValid: false,
  });

  const [inputsData, setinputsData] = useState({
    email: '',
    pass: '',
    name: '',
  });

  // const gettingInputsData = () => {};

  useEffect(() => {
    if (!Object.values(validForm).includes(false)) {
      validationsInputs(true);
      getInputsData({ ...inputsData });
    } else {
      validationsInputs(false);
    }
  }, [validForm]);

  const InputsData = [
    {
      type: 'email',
      label: 'Ваш email',
      placeholder: 'Email',
      errorText: 'Введите корректный Email',
      checkIsInputValid: emailValid,
    },
    {
      type: 'password',
      label: 'Ваш пароль',
      placeholder: 'Пароль',
      errorText: 'Пароль должен содержать не менее 5 символов',
      checkIsInputValid: passValid,
    },
    {
      type: 'name',
      label: 'Ваше имя',
      placeholder: 'Имя',
      errorText: 'Имя должно содержать не менее 3 символов',
      checkIsInputValid: nameValid,
    },
  ];

  function emailValid(inputValid, value) {
    console.log(inputValid, 'тут корректное значение');

    setValidForm((prev) => {
      return { ...prev, emailValid: inputValid };
    });
    setinputsData((prev) => {
      return { ...prev, email: value };
    });
  }

  function passValid(inputValid, value) {
    setValidForm((prev) => {
      return { ...prev, passValid: inputValid };
    });
    setinputsData((prev) => {
      return { ...prev, pass: value };
    });
  }

  function nameValid(inputValid, value) {
    setValidForm((prev) => {
      return { ...prev, nameValid: inputValid };
    });
    setinputsData((prev) => {
      return { ...prev, name: value };
    });
  }

  return (
    <div className={`inputs ${parentClass}`}>
      {InputsData.map((item) => (
        <Input {...item} key={useId()} />
      ))}
    </div>
  );
};

export default Inputs;
