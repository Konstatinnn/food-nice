import React from 'react';
import { Fragment } from 'react';
import styles from '../scss/_Container.module.scss';
import UserInfo from './UserInfo';
import ProductsInfo from './ProductsInfo';
import UserForm from './form/Auth';

const Container = (props) => {
  return (
    <div className={styles.container}>
      <UserForm />
      {/* <UserInfo />
      <ProductsInfo /> */}
    </div>
  );
};
export default Container;
