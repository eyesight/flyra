import Helper from './Helper';

class Pagetransition {
  constructor() {
    this.navigationElements = Array.prototype.slice.call(document.querySelectorAll('.transition-blue a'));
    this.bindEvents();
  }

  bindEvents() {
    console.log('dfdf');
    navigationElements.forEach(element => {
        element.addEventListener('click', e => {
          this.toggleHamburger(this.hamburger);
        });
    });
  }
}

export default Pagetransition;
