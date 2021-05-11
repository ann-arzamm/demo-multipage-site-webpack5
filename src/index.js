import './index.scss';

import sandwich from './js/sandwich.js';
import pageup from './js/pageup.js';
import slider from './js/slider.js';
import CookieConsent from './js/cookie.js';

window.addEventListener('DOMContentLoaded', () => {
  // cookie init
  new CookieConsent({
    activeClass: 'popup_active',
    popup: '.popup',
    btnConfirm: '[data-confirm]',
    btnCancel: '[data-cancel]',
  }).init();

  // sandwich menu
  sandwich('.sandwich', '.sandwich__dropdown', 'sandwich__dropdown_active');

  // page up button
  pageup('.pageup', 500);

  // carousel activation
  slider('carousel', '.slide', '.carousel__btn_left', '.carousel__btn_right');
});
