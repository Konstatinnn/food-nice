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
  const [isUserLogin, setIsUserLogin] = useState(false);

  const changeFormAuth = () => {
    setIsUserLogin(!isUserLogin);
  };

  return (
    <>
      <Auth
        typeOfForm={
          isUserLogin ? { ...typeOfForm.login } : { ...typeOfForm.register }
        }
      />
    </>
  );
  // return <Input {...inputData} />;
};
export default App;
