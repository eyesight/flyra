import Helper from "./Helper";

class scrollToFirstSection {
  constructor(config = {}) {
    const {
      element
    } = config;
    //this.elements = Array.prototype.slice.call(document.querySelectorAll(element));
    this.element = document.querySelector(element);

    if(this.element) {
      this.bindEvents();
    }
  }
  
  bindEvents() {
    this.element.addEventListener('click', (ele)=>{
      ele.preventDefault();
      let section = Helper.getClosest(this.element, 'section');
      if(section) {
        let sectionNext = section.nextElementSibling;
        this.scrollTo(sectionNext);
      }
    });
  }

  scrollTo(element) {    
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: element.offsetTop
    });
  }

}

export default scrollToFirstSection;
