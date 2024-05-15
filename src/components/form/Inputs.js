import React, { useEffect, useId, useState } from 'react';
import './Inputs.scss';
import Input from './Input';

const Inputs = ({
  parentClass,
  validationsInputs,
  getInputsData,
  whichFormToShow,
}) => {
  const [validForm, setValidForm] = useState({
    emailValid: false,
    passValid: false,
    nameValid: whichFormToShow,
  });

  const [inputsData, setinputsData] = useState({
    email: '',
    pass: '',
    name: '',
  });

  useEffect(() => {
    setValidForm((prev) => ({
      ...prev,
      nameValid: whichFormToShow,
    }));
  }, [whichFormToShow]);

  // const gettingInputsData = () => {};

  useEffect(() => {
    if (whichFormToShow && validForm.emailValid && validForm.passValid) {
      validationsInputs(true);
      getInputsData({ ...inputsData });
    }
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
      {InputsData.map((item, index) =>
        whichFormToShow && item.type == 'name' ? null : (
          <Input whichFormToShow={whichFormToShow} {...item} key={index} />
        )
      )}
    </div>
  );
};

export default Inputs;
