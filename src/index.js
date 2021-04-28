import 'animate.css';
import './index.scss';

import sandwich from './js/sandwich.js';
import pageup from './js/pageup.js';
import slider from './js/slider.js';

window.addEventListener('DOMContentLoaded', () => {
  // sandwich menu
  sandwich('.sandwich', '.sandwich__dropdown', 'sandwich__dropdown_active');

  // page up button
  pageup('.pageup', 500);

  // carousel activation
  slider('carousel', '.slide', '.carousel__btn_left', '.carousel__btn_right');
});
