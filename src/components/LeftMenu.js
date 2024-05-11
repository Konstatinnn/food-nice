import React from 'react';

const LeftMenu = () => {
  return (
    <div class="left-menu">
      <div class="left-menu__body">
        <img src="/src/img/info/refuse.svg" alt="" class="left-menu__refuse" />
        <div class="left-menu__user user">
          <div class="user-info__user user">
            <div class="user__img">
              <img src="/src/img/info/logo.svg" alt="" class="user__icon" />
            </div>
            <div class="user__name">Требуется авторизация</div>

            <div class="user__menu">
              <a href="#" class="user__link-menu">
                Вход
              </a>
            </div>
            <div class="user__cart">
              <a href="#" class="user__link-cart">
                Регистрация
              </a>
            </div>
          </div>
        </div>
        <div class="left-menu__cart">
          <div class="left-menu__shopping-cart shopping-cart">
            <img src="/src/img/info/" alt="" class="shopping-cart__icon" />
          </div>
          <div class="left-menu__go-cart">Перейти в корзину</div>
        </div>
      </div>
    </div>
  );
};

export default LeftMenu;
