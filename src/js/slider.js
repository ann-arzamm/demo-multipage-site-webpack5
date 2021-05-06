export default (carouselSelector, slides, prev, next) => {
  let slideIndex = 1;
  const items = document.querySelectorAll(slides);
  // const carousel = document.querySelector(carouselSelector);
  // carousel state
  // const paused = false;

  // show current slide
  function showSlides(n) {
    if (n > items.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = items.length;
    }

    // hide all slides
    items.forEach((item) => {
      // item.classList.add('animate__animated');
      item.style.display = 'none';
    });

    // show slide
    items[slideIndex - 1].style.display = 'block';
  }

  showSlides(slideIndex);

  // for slide number changing - used below
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function prevSlide() {
    items[slideIndex - 1].classList.remove('animate__slideInLeft', 'animate__slideOutRight', 'animate__slideInRight', 'animate__slideOutLeft');
    items[slideIndex - 1].classList.add('animate__slideOutRight');
    setTimeout(() => {
      plusSlides(-1);
      items[slideIndex - 1].classList.remove('animate__slideInLeft', 'animate__slideOutRight', 'animate__slideInRight', 'animate__slideOutLeft');
      items[slideIndex - 1].classList.add('animate__slideInLeft');
    }, 800);
  }

  function nextSlide() {
    items[slideIndex - 1].classList.remove('animate__slideInLeft', 'animate__slideOutRight', 'animate__slideInRight', 'animate__slideOutLeft');
    items[slideIndex - 1].classList.add('animate__slideOutLeft');

    setTimeout(() => {
      plusSlides(1);
      items[slideIndex - 1].classList.remove('animate__slideInLeft', 'animate__slideOutRight', 'animate__slideInRight', 'animate__slideOutLeft');
      items[slideIndex - 1].classList.add('animate__slideInRight');
    }, 800);
  }

  // buttons events
  try {
    const prevBtn = document.querySelector(prev);
    const nextBtn = document.querySelector(next);

    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      prevSlide();
    });

    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      nextSlide();
    });
  } catch (err) {}

  // auto slide
  function activateAnimation() {
    setInterval(nextSlide, 5000);
  }

  // pause on hover
  // carousel.addEventListener('mouseenter', () => {
  //   clearInterval(paused);
  // });

  // carousel.addEventListener('mouseleave', () => {
  //   activateAnimation();
  // });

  activateAnimation();
};
