import Helper from "./Helper";

class smoothScroll {
  constructor(config = {}) {
    const {
      element
    } = config;
    console.log('smooth');
    this.elements = Array.prototype.slice.call(document.querySelectorAll(element));
    this.bindEvents();
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
    let fromTop = window.scrollY;
  
    array.forEach(link => {
      console.log(link);
      if(link.hash){
        let sectionInner = document.querySelector(link.hash);
        let section = Helper.getClosest(sectionInner, 'section');
        console.log(section.offsetTop);
        console.log(fromTop);
        console.log(section.offsetTop + section.offsetHeight);
        if (
          section.offsetTop <= fromTop && 
          section.offsetTop + section.offsetHeight > fromTop
        ) {
          link.parentNode.classList.add("current");
        } else {
          link.parentNode.classList.remove("current");
        }
      }
    });
  };
}

export default smoothScroll;
