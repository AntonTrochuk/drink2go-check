const DOMElementButtonWrapper = document.querySelector('.button-wrapper');
const DOMElementwrapperMenu = document.querySelector('.navigation__list-wrapper');
const DOMElementButtonClose = document.querySelector('.button-vissible');

const wrapperMenu = () => {
  DOMElementButtonWrapper.addEventListener('click', () => {
    DOMElementwrapperMenu.classList.remove('navigation__list-wrapper--open');
    DOMElementButtonWrapper.classList.add('button-close');
    DOMElementButtonClose.classList.remove('button-close');
  });

  DOMElementButtonClose.addEventListener('click', () => {
    DOMElementwrapperMenu.classList.add('navigation__list-wrapper--open');
    DOMElementButtonWrapper.classList.remove('button-close');
    DOMElementButtonClose.classList.add('button-close');
  });
};

export { wrapperMenu };
