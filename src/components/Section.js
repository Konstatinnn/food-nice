import React from 'react';
import styles from '../scss/_Section.module.scss';
const Section = (props) => {
  console.log(props.parentClass);
  return (
    <div className={`${props.parentClass} ${styles.section}`}>
      <div className={styles.section__text}>Меню</div>
      <input
        placeholder="Введите блюдо или состав"
        type="text"
        className={styles.section__input}
      />
    </div>
  );
};

export default Section;
