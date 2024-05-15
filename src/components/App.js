import React, { useState } from 'react';
import { Fragment } from 'react';
import Container from './Container';
import '../scss/style.css';

import Auth from './form/Auth';

const typeOfForm = {
  login: {
    text: 'Вход',
    shouldShowInpName: false,
    additTextQuestion: 'Нет аккаунта?',
    changeTypeForm: 'Зарегистрироваться',
  },
  register: {
    text: 'Регистрация',
    shouldShowInpName: true,
    additTextQuestion: 'Есть аккаунт?',
    changeTypeForm: 'Войти',
  },
};

const App = () => {
  const [whichFormToShow, setWhichFormToShow] = useState(false); // false - register true - login

  const changeFormAuth = () => {
    setWhichFormToShow(!whichFormToShow);
  };

  return (
    <>
      <Auth
        changeFormAuth={changeFormAuth}
        whichFormToShow={whichFormToShow}
        typeOfForm={
          whichFormToShow ? { ...typeOfForm.login } : { ...typeOfForm.register }
        }
      />
    </>
  );
  // return <Input {...inputData} />;
};
export default App;
