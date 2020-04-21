import Helper from './Helper';

class ChangeClassOnScroll {
  constructor(config = {}) {
    const {
      backgroundElement,
      backgroundElement2,
      overElement
    } = config;

    this.hero = document.querySelector(backgroundElement);
    this.layoutbg = Array.prototype.slice.call(document.querySelectorAll(backgroundElement2));
    this.element = document.querySelector(overElement);
    this.isScrolledDown = true;
    this.buttonHeight = this.element ? this.element.offsetHeight : 0;

    if(this.hero && this.element){
      this.bindEvents();
    }
  }
  
  bindEvents() {
    let lastScrollTop = 0;
    this.scrollFunction(this.hero, this.element, this.buttonHeight, this.layoutbg);
    
    window.addEventListener("resize", (e) => { 
      this.buttonHeight = this.element.offsetHeight;
    });
    
    window.addEventListener("scroll", (e) => {
      let st = window.pageYOffset || document.documentElement.scrollTop; 
      if (st > lastScrollTop){
        this.isScrolledDown = true;
      } else {
        this.isScrolledDown = false;
      }
      lastScrollTop = st <= 0 ? 0 : st;
      this.scrollFunction(this.hero, this.element, this.buttonHeight, this.layoutbg);
   });
  }

  scrollFunction(hero, button, height, bgs) {
    let heroHeight = hero.offsetHeight;
    let heroScrollBottom = (hero.offsetTop + heroHeight) - document.documentElement.scrollTop;
    let buttonViewportOffset = button.getBoundingClientRect();
    let buttonBottom = buttonViewportOffset.top + (height / 2);
    let isElementNotOverABg = bgs.every((el) => !this.isElementOnBg(el, button, height)); //check if one returns true. When yes, element is true - gets the class for white
    if(heroScrollBottom >= buttonBottom || !isElementNotOverABg) {
      Helper.addClass(button, button.classList[0] + '--white');
    }else {
      Helper.removeClass(button, button.classList[0] + '--white');
    }
  }

  isElementOnBg(bg, el, heightEl) {
    let bgHeight = bg.offsetHeight;
    let bgScrollBottom = (bg.offsetTop + bgHeight) - document.documentElement.scrollTop;
    let bgScrollTop = bg.offsetTop - document.documentElement.scrollTop;
    let buttonViewportOffset = el.getBoundingClientRect();
    let buttonBottom = buttonViewportOffset.top + (heightEl / 2);
    return bgScrollTop <= buttonBottom && bgScrollBottom >= buttonBottom;
  }
}

export default ChangeClassOnScroll;
