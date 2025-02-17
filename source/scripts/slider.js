const previewSection = document.querySelector('.preview__container-section');
const previewContainers = document.querySelectorAll('.preview__block');
const sliderButtonPrev = document.querySelector('.preview__button-left');
const sliderButtonNext = document.querySelector('.preview__button-right');
const dotsButtons = document.querySelectorAll('.preview__dots-button');


const slider = () => {
  let currentIndex = 0;

  const showSlide = (index) => {

    previewContainers.forEach((container) => {
      container.classList.add('slider-block');
    });

    previewContainers[index].classList.remove('slider-block');

    previewSection.classList.remove(
      'slider-color-flat-white',
      'slider-color-lavender',
      'slider-color-espresso'
    );

    if (index === 0) {
      previewSection.classList.add('slider-color-flat-white');
    } else if (index === 1) {
      previewSection.classList.add('slider-color-lavender');
    } else if (index === 2) {
      previewSection.classList.add('slider-color-espresso');
    }

    dotsButtons.forEach((dot, dotIndex) => {
      if (dotIndex === index) {
        dot.classList.add('active-dots');
      } else {
        dot.classList.remove('active-dots');
      }
    });
  };

  showSlide(currentIndex);

  sliderButtonPrev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + previewContainers.length) % previewContainers.length;
    showSlide(currentIndex);
  });

  sliderButtonNext.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % previewContainers.length;
    showSlide(currentIndex);
  });

  dotsButtons.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      showSlide(currentIndex);
    });
  });
};

export { slider };
