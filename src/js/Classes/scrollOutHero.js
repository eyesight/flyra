import Helper from './Helper';

class scrollOutHero {
  constructor(config = {}) {
    const {
      backgroundElement,
      overElement,
    } = config;

    this.hero = document.querySelector(backgroundElement);
    this.element = document.querySelector(overElement);
    this.isScrolledDown = true;
    
    if(this.hero && this.element){
      this.buttonHeight = this.element.offsetHeight;
      this.bindEvents();
    }
  }
  
  bindEvents() {
    this.scrollFunction(this.hero, this.element, this.buttonHeight);
    
    window.addEventListener("resize", (e) => { 
      this.buttonHeight = this.element.offsetHeight;
    });
    
    window.addEventListener("scroll", (e) => {
      this.scrollFunction(this.hero, this.element, this.buttonHeight);
   });
  }

  scrollFunction(hero, button, height) {
    let heroHeight = hero.offsetHeight;
    let heroScrollBottom = (hero.offsetTop + heroHeight) - document.documentElement.scrollTop;

    let buttonViewportOffset = button.getBoundingClientRect();
    var buttonBottom = buttonViewportOffset.top + (height/2);
    if(heroScrollBottom >= buttonBottom) {
        Helper.addClass(button, button.classList[0] + '--overHero');
      }else {
        Helper.removeClass(button, button.classList[0] + '--overHero');
      }
  }
}

export default scrollOutHero;
