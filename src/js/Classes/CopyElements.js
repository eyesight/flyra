
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
    let newClone = el.cloneNode(true);
    let parent = el.parentNode;
    Helper.addClass(newClone, classNames + '--white');
    parent.insertBefore(newClone, el);
  }

}

export default CopyElements;
