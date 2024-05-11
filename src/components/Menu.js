import React from 'react';
import styles from '../scss/_Menu.module.scss';
import nextId from 'react-id-generator';
import Meal from './Meal';
import Dishes from './Dishes';
import Section from './Section';

const meals = [
  {
    img_path: '../img/menu/meal1.jpg',
    title: 'Наслаждение',
    description: 'Салями, руккола, помидоры, оливки',
    rating: 4.5,
    price: 300,
  },
  {
    img_path: '../img/menu/meal2.jpg',
    title: 'Наслаждение',
    description: 'Салями, руккола, помидоры, оливки',
    rating: 4.5,
    price: 300,
  },
  {
    img_path: '../img/menu/meal3.jpg',
    title: 'Наслаждение',
    description: 'Салями, руккола, помидоры, оливки',
    rating: 4.5,
    price: 300,
  },
  {
    img_path: '../img/menu/meal4.jpg',
    title: 'Наслаждение',
    description: 'Салями, руккола, помидоры, оливки',
    rating: 4.5,
    price: 300,
  },
  {
    img_path: '../img/menu/meal5.jpg',
    title: 'Наслаждение',
    description: 'Салями, руккола, помидоры, оливки',
    rating: 4.5,
    price: 300,
  },
  {
    img_path: '../img/menu/meal6.jpg',
    title: 'Наслаждение',
    description: 'Салями, руккола, помидоры, оливки',
    rating: 4.5,
    price: 300,
  },
];

const Menu = () => {
  return (
    <section className={styles.menu}>
      <Section parentClass={styles.menu__section} />
      <Dishes>
        {meals.map((item) => (
          <Meal key={nextId()} infoOfmeal={{ ...item }} />
        ))}
      </Dishes>
    </section>
  );
};

export default Menu;
