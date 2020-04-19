
import Helper from './Helper';

class FormHelp {
  constructor(config = {}) {
    const {
      element
    } = config;

    this.element = Array.prototype.slice.call(document.querySelectorAll(element));
    this.form = document.querySelector('.frm_form_fields');

    if(this.form){
      this.bindEvents();
    }
  }
  
  bindEvents() {
    this.checkIfActive(this.element);
  }
 
  checkIfActive(elements) {
    elements.forEach((el) => {
      Helper.removeClass(el, 'is-active');
      let input = el.querySelector('input');
      if(input && input !== null) {
        input.addEventListener("keyup", ()=>{
          this.addClass(input, el);
        });
        input.addEventListener("click", ()=>{
          this.addClass(input, el);
        });
      };
    });
  }

  addClass(elem, parent) {
      this.element.forEach((e)=>{
        let inp = e.querySelector('input');
        if(inp && inp !== null) { 
          if(inp.value === '') {
            Helper.removeClass(e, 'is-active');
          }
        }
      });
      if(elem.matches(':focus') || elem.value !== '') {
        Helper.addClass(parent, 'is-active');
      }
  }

}

export default FormHelp;
