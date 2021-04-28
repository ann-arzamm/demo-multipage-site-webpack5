export default (triggerSelector, menuSelector, activeClass) => {
  const trigger = document.querySelector(triggerSelector);
  const menu = document.querySelector(menuSelector);

  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.toggle(activeClass);
  });
};
