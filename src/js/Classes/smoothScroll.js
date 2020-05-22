import Helper from "./Helper";

class smoothScroll {
  constructor(config = {}) {
    const {
      element,
      element2
    } = config;
    this.elements = Array.prototype.slice.call(document.querySelectorAll(element));
    //this.url = this.getUrl(window.location);
    this.anchorlinks = document.querySelectorAll(element2)
    this.bindEvents();
  }
  
  bindEvents() {
    window.addEventListener("resize", (e) => { 
      this.scrollFunction(this.elements);
    });
    
    window.addEventListener("scroll", (e) => {
      this.scrollFunction(this.elements);
    });

    this.anchorlinks.forEach((el)=>{
      console.log(el);
      let urlArr = el.href.split('#');
      let ele = document.getElementById(urlArr[1]);
      el.addEventListener('click', (e) => {
        e.preventDefault();
        if(this.getUrl(window.location) == urlArr[0]) {
          setTimeout(()=>{
            this.scrollTo(ele.parentNode);
          } , 1);
        } else {
          window.location = el.href;
          this.bindEvents(urlArr[1]);
        }
      });
    });

    if(window.location.hash) {
      console.log(window.location.hash);
      let element = document.querySelector(window.location.hash);
        // takes care of some browsers issue
        setTimeout(()=>{
          this.scrollTo(element.parentNode);
        } ,1);
    }
  
  }

  scrollTo(element) {    
    console.log(element);
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: element.offsetTop
    });
  }

  getUrl(theUrl) {
    if(theUrl.hash) {
      return theUrl.href.replace(location.hash,"");
    } else {
      return theUrl.href;
    }
  }

  scrollFunction(array) {
    let fromTop = window.scrollY;
  
    array.forEach(link => {
      if(link.hash){
        let sectionInner = document.querySelector(link.hash);
        let section = Helper.getClosest(sectionInner, 'section');
        if ( section && section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
          link.parentNode.classList.add("current");
          //let theId = sectionInner.id;
          //window.location.hash = theId; 
        } else {
          link.parentNode.classList.remove("current");
        }
      }
    });
  };
}

export default smoothScroll;
