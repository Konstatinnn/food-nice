import React from 'react';
import styles from '../scss/_Meal.module.scss';

const Meal = (props) => {
  console.log(props);
  return (
    <div className={styles.meal}>
      <div className={styles.meal__body}>
        <div className={styles.meal__img}>
          <img
            src={props.infoOfmeal.img_path}
            alt=""
            className={styles.meal__image}
          />
        </div>
        <div className={styles.meal__title}>{props.infoOfmeal.title}</div>
        <div className={styles.meal__description}>
          {props.infoOfmeal.description}
        </div>
      </div>
    </div>
  );
};

export default Meal;
