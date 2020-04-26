import Helper from './Helper';

class Menu {
  constructor() {
    // console.log('constructor');
    this.hamburger = document.querySelector('.header__hamburger');
    this.bindEvents();

		this.removeClassResponsively('navigation--in', window.matchMedia('(min-width: 1250px)'), window);
		this.removeClassResponsively('animate--in', window.matchMedia('(min-width: 1250px)'), window);
  }

  bindEvents() {
    // console.log('bindEvents function');
    this.hamburger.addEventListener('click', e => {
      this.toggleHamburger(this.hamburger);
    });
  }

  toggleHamburger(burger) {
		console.log('toggle Hamburger');
		let toggleContainer = burger.getAttribute('data-toggles-nav');
		let toggleAria = burger.getAttribute('aria-expanded');
    let menu = document.querySelector(`.${toggleContainer}`);

    /*
    * Accessibilty toggle
    * */
    if (toggleAria === 'true' ) {
			burger.setAttribute('aria-expanded', false);
		} else {
			burger.setAttribute('aria-expanded', true);
		}

    if (Helper.hasClass(burger, 'animate--in')) {
      Helper.removeClass(document.querySelector('body'), 'menu-open');
      Helper.removeClass(menu, 'navigation--in');
      Helper.addClass(menu, 'navigation--out');
      Helper.removeClass(burger, 'animate--in');
      Helper.addClass(burger, 'animate--out');
    } else {
      Helper.addClass(document.querySelector('body'), 'menu-open');
      Helper.addClass(menu, 'navigation--in');
      Helper.removeClass(menu, 'navigation--out');
      Helper.addClass(burger, 'animate--in');
      Helper.removeClass(burger, 'animate--out');
    }
  }

  removeClassResponsively(removableClass, breakpoint, window) {
    function remove() {
			let el = document.querySelector(`.${removableClass}`);

      if (breakpoint.matches) {
				// If media query matches
				if(el){
					el.classList.remove(removableClass);
				}
      }
    }

    remove();
    window.addEventListener('resize', () => {
      remove();
		});

		window.addEventListener("orientationchange", () => {
			remove();
		}, false);
  }

  killMenu() {
    let burger = this.hamburger;

    Helper.removeClass(burger, 'animate--in');
    Helper.addClass(burger, 'animate--out');

    Helper.removeClass(document.querySelector('body'), 'menu-open');
  }
}

export default Menu;
