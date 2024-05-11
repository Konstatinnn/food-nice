import React from 'react';
import styles from '../scss/_User-info.module.scss';
import User from './User';
const UserInfo = (props) => {
  console.log(styles['user-info']);
  return (
    <div className={styles['user-info']}>
      <User />
    </div>
  );
};
export default UserInfo;
