import React, { useState } from 'react';
import logo from '../../img/login/Group.svg';
import Button from '../Button';
import styles from './Auth.scss';
import Inputs from './Inputs';

const inputs = [];

const Auth = ({ typeOfForm }) => {
  const [isFormValid, setIsFormValid] = useState(false);
  const [inputsData, setInputsData] = useState({
    email: '',
    pass: '',
    name: '',
  });

  const validationsInputs = (setInputsData) => {
    setIsFormValid(setInputsData);
  };

  const getInputsData = ({ email, pass, name }) => {
    setInputsData((prev) => {
      return {
        email: email,
        pass: pass,
        name: name,
      };
    });
  };

  // const getInputsData = ({
  //   emailValid: email,
  //   passValid: pass,
  //   nameValid: name,
  // }) => {
  //   setInputsData((prev) => {
  //     return {
  //       email: email,
  //       pass: pass,
  //       name: name,
  //     };
  //   });
  // };

  const testHandler = () => {
    console.log(inputsData);
  };

  const check = (e) => {
    e.preventDefault();
  };
  return (
    <div className="auth">
      <div className="auth__container">
        <div className="auth__icon">
          <img src={logo} alt="" className="auth__image" />
        </div>
        <div className="auth__user-form">
          <form action="" className="auth__form" onClick={check}>
            <div className="auth__text">{typeOfForm.text}</div>
            <Inputs
              getInputsData={getInputsData}
              validationsInputs={validationsInputs}
              shouldShowInpName={typeOfForm.shouldShowInpName}
              parentClass={'auth__inputs'}
              а
            />
            <Button
              disabled={isFormValid}
              onClick={testHandler}
              text={'Вход'}
              parentClass="auth__btn"
            />
            <div className="auth__addit-text">
              <div className="auth__question">
                {typeOfForm.additTextQuestion}
              </div>
              <a href="" className="auth__change-type">
                {typeOfForm.changeTypeForm}
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
