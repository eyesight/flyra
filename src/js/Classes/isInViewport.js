import Helper from "./Helper";

class isInViewport {
  constructor(config = {}) {
    const {
      element,
      className,
    } = config;

    this.elements = Array.prototype.slice.call(document.querySelectorAll(element));
    this.className = className;
    
    if(this.elements.length > 0){
      this.bindEvents();
    }
  }
  
  bindEvents() {
    window.addEventListener("resize", (e) => { 
      this.scrollFunction(this.elements);
    });
    
    window.addEventListener("scroll", (e) => {
      this.scrollFunction(this.elements);
    });
  }

  scrollFunction(array) {
    array.forEach(element => {
      if(Helper.isElementinViewport(element)){
        Helper.addClass(element, 'is-in-viewport');
      }else {
        Helper.removeClass(element, 'is-in-viewport');
      }
    });
  }
}

export default isInViewport;
