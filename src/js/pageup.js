export default (elemSelector, offset) => {
  const upElem = document.querySelector(elemSelector);

  window.addEventListener('scroll', () => {
    if (document.body.scrollTop > offset || document.documentElement.scrollTop > offset) {
      upElem.classList.add('animate__fadeInUp');
      upElem.classList.remove('animate__fadeOutDown');
    } else {
      upElem.classList.add('animate__fadeOutDown');
      upElem.classList.remove('animate__fadeInUp');
    }
  });
};
