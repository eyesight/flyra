import Helper from "./Helper";

class isInViewport {
  constructor(config = {}) {
    const {
      element,
      className,
    } = config;

    this.elements = Array.prototype.slice.call(document.querySelectorAll(element));
    this.className = className;
    this.titleElement = document.querySelector('.category-title');
    this.titleElementLeft = this.titleElement.style.left;
    this.titleElementWidth = this.titleElement.style.width;
    this.footer = document.querySelector('footer').getBoundingClientRect().top;
    
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
    array.forEach((element, index) => {
      let bounding = element.getBoundingClientRect();
      let title = element.querySelector('.category-title');
      let titlebounding = title.getBoundingClientRect();
      if(bounding.top <= 130) {
        Helper.addClass(element, 'is-sticky');
        title.style.left = titlebounding.left + 'px';
        title.style.width = titlebounding.width + 'px';
      } else {
        title.style.width = this.titleElementWidth;
        title.style.left = this.titleElementLeft;
        Helper.removeClass(element, 'is-sticky');
      }

      if(bounding.bottom <= 0) {
        Helper.addClass(element, 'is-out');
      } else {
        Helper.removeClass(element, 'is-out');
      }
      
      if((array.length - 1) === index) {
        if(titlebounding.bottom >= bounding.bottom && titlebounding.top <= 130) {
          Helper.addClass(element, 'is-out-last');
        } else {
          Helper.removeClass(element, 'is-out-last');
        }
      }
    });
  }
}

export default isInViewport;
