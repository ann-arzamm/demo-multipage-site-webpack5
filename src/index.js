import 'animate.css';
import './index.scss';

// sandwich menu
const menu = document.querySelector('.sandwich');
const dropdown = document.querySelector('.sandwich__dropdown');

menu.addEventListener('click', (e) => {
  e.preventDefault();
  dropdown.classList.toggle('sandwich__dropdown_active');
});

// page up button
const upElem = document.querySelector('.pageup');

window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    // upElem.style.bottom = '40px';
    upElem.classList.add('animate__fadeInUp');
    upElem.classList.remove('animate__fadeOutDown');
  } else {
    // upElem.style.bottom = '-100%';
    upElem.classList.add('animate__fadeOutDown');
    upElem.classList.remove('animate__fadeInUp');
  }
});
