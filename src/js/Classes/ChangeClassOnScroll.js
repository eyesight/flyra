import Helper from './Helper';

class ChangeClassOnScroll {
  constructor(config = {}) {
    const {
      backgroundElement,
      overElement,
    } = config;

    this.hero = document.querySelector(backgroundElement);
    this.element = document.querySelector(overElement);
    this.isScrolledDown = true;
    this.buttonHeight = this.element ? this.element.offsetHeight : 0;

    if(this.hero && this.element){
      this.bindEvents();
    }
  }
  
  bindEvents() {
    let lastScrollTop = 0;
    this.scrollFunction(this.hero, this.element, this.buttonHeight);
    
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
      this.scrollFunction(this.hero, this.element, this.buttonHeight);
   });
  }

  scrollFunction(hero, button, height) {
    let heroHeight = hero.offsetHeight;
    let heroScrollBottom = (hero.offsetTop + heroHeight) - document.body.scrollTop;

    let buttonViewportOffset = button.getBoundingClientRect();
    var buttonBottom = buttonViewportOffset.top + (height / 2);

    if(heroScrollBottom <= buttonBottom) {      
      Helper.removeClass(button, button.classList[0] + '--white');
    } else {
      Helper.addClass(button, button.classList[0] + '--white');
    }
  }
}

export default ChangeClassOnScroll;
