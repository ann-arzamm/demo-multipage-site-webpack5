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

// window.addEventListener('scroll', () => {
//   if (document.documentElement.scrollTop > 100) {
//     upElem.classList.add('pageup_active');
//   }
// });
