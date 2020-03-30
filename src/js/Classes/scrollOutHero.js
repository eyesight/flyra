class scrollOutHero {
  constructor(config = {}) {
    const {
      backgroundElement,
      overElement,
      isHeight
    } = config;

    this.hero = document.querySelector(backgroundElement);
    this.element = document.querySelector(overElement);
    this.isScrolledDown = true;
    this.isHeight = isHeight;
    
    if(this.hero && this.element){
      this.buttonHeight = isHeight ? this.element.offsetHeight : this.element.offsetWidth;
      this.bindEvents();
    }
  }
  
  bindEvents() {
    let lastScrollTop = 0;
    if(this.isHeight) {
      this.scrollFunction(this.hero, this.element, this.buttonHeight);
    } else {
      this.scrollFunctionWidth(this.hero, this.element, this.buttonHeight);
    }
    
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
      if(this.isHeight) {
        this.scrollFunction(this.hero, this.element, this.buttonHeight);
      } else {
        this.scrollFunctionWidth(this.hero, this.element, this.buttonHeight);
      }
   });
  }

  scrollFunction(hero, button, height) {
    let heroHeight = hero.offsetHeight;
    let heroScrollBottom = (hero.offsetTop + heroHeight) - document.body.scrollTop;

    let buttonViewportOffset = button.getBoundingClientRect();
    var buttonTop = buttonViewportOffset.top;
    var buttonBottom = buttonViewportOffset.top + height;

    if((heroScrollBottom <= buttonBottom) && (heroScrollBottom >= buttonTop)) {
      let shift = height - (buttonBottom - heroScrollBottom);
      this.element.style.height = shift;
    } else if(heroScrollBottom >= buttonBottom) {
      this.element.style.height = height;
    } else {
      this.element.style.height = 0;
    }
  }

  scrollFunctionWidth(hero, button, height) {
    let heroHeight = hero.offsetHeight;
    let heroScrollBottom = (hero.offsetTop + heroHeight) - document.body.scrollTop;

    let buttonViewportOffset = button.getBoundingClientRect();
    var buttonTop = buttonViewportOffset.top;
    var buttonBottom = buttonViewportOffset.top + height;
    this.element.style.height = height;

    if((heroScrollBottom <= buttonBottom) && (heroScrollBottom >= buttonTop)) {
      let shift = height - (buttonBottom - heroScrollBottom);
      this.element.style.width = shift;
    } else if(heroScrollBottom >= buttonBottom) {
      this.element.style.width = height;
    } else {
      this.element.style.width = 0;
    }
  }
}

export default scrollOutHero;
