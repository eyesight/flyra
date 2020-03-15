
import Helper from './Helper';

class CopyElements {
  constructor(config = {}) {
    const {
      element
    } = config;

    this.element = document.querySelector(element);

    if(this.element){
      this.bindEvents();
    }
  }
  
  bindEvents() {
    this.cloneEl(this.element);
  }

  cloneEl(el) {
    let classNames = el.classList.value;
    console.log(classNames);
    let newClone = el.cloneNode(true);
    let parent = el.parentNode;
    console.log(parent);
    Helper.addClass(newClone, classNames + '--white');
    parent.insertBefore(newClone, el);
  }

}

export default CopyElements;
