import React from 'react';
import logo from '../../img/login/Group.svg';
import Button from '../Button';
import styles from './Auth.scss';
import Inputs from './Inputs';

// import styles from '../scss/_User-form.module.scss';

const inputs = [];

const Auth = ({ typeOfForm }) => {
  const test = 5;
  const testHandler = () => {
    console.log(test);
  };
  console.log(typeOfForm);
  // const test = (e) => {
  //   e.preventDefault();
  //   console.log(1);
  // };
  // const changeType = (e) => {
  //   e.preventDefault();
  //   props.changeFormAuth();
  // };
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
              shouldShowInpName={typeOfForm.shouldShowInpName}
              parentClass={'auth__inputs'}
              а
            />
            <Button
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
