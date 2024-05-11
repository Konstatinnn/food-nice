import React from 'react';
import styles from '../scss/_User.module.scss';
import icon from '/src/img/info/logo.svg';
import test from '../img/info/register.svg';
const User = (props) => {
  console.log(test);
  // console.log(icon);
  return (
    <div className={`${styles.user} ${props.parentClass}`}>
      <div className={styles.user__img}>
        <img
          src={'../img/info/logo.svg'}
          alt=""
          className={styles.user__icon}
        />
      </div>
      <div className={styles.user__name}>{props.name}</div>

      <div className={styles.user__menu}>
        <img src="../img/info/logIn.svg" alt="" />
        <a href="#" className={`${styles['user__link-menu']}`}>
          {props.menu}
        </a>
      </div>
      <div className={styles.user__cart}>
        <img src="../img/info/register.svg" alt="" />
        <a href="#" className={`${styles['user__link-cart']}`}>
          asdasdasdadasd
        </a>
      </div>
    </div>
  );
};

export default User;
