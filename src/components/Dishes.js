import React from 'react';
import styles from '../scss/_Dishes.module.scss';
const Dishes = (props) => {
  return <div className={styles.dishes}>{props.children}</div>;
};

export default Dishes;
