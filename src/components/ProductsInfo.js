import React from 'react';
import Menu from './Menu';
import styles from '../scss/_Products-info.module.scss';

const ProductsInfo = () => {
  return (
    <div className={styles['products-info']}>
      <Menu />
    </div>
  );
};

export default ProductsInfo;
