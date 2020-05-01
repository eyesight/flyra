// Bundle theme module
import ToTop from './Classes/ToTop';
import ChangeClassOnScroll from './Classes/ChangeClassOnScroll';
import Sticky from './../../node_modules/sticky-js';
import isInViewport from './Classes/isInViewport';
import FormHelp from './Classes/FormHelp';
import smoothScroll from './Classes/smoothScroll';
import scrollToFirstSection from './Classes/scrollToFirstSection';
import Menu from './Classes/Menu';
import scrollOutHero from './Classes/scrollOutHero';
import smoothscroll from 'smoothscroll-polyfill';
 
// kick off the polyfill 
smoothscroll.polyfill(); 

(function() {
  document.addEventListener('DOMContentLoaded', function() {
	
    new ToTop();

    new ChangeClassOnScroll({
      backgroundElement: '.hero',
      backgroundElement2: '.layout-bg',
      overElement: '.circle-link',
    });

    /* new ChangeClassOnScroll({
      backgroundElement: '.hero',
      backgroundElement2: '.layout-bg',
      overElement: '.nav',
    }); */

    new ChangeClassOnScroll({
      backgroundElement: '.hero',
      backgroundElement2: '.layout-bg',
      overElement: '.service-nav',
    }); 

    /* new ChangeClassOnScroll({
      backgroundElement: '.hero',
      backgroundElement2: '.layout-bg',
      overElement: '.header'
    }); */ 

    /* new ChangeClassOnScroll({
      backgroundElement: '.hero',
      backgroundElement2: '.layout-bg',
      overElement: '.header__logo-container'
    }); */

    new ChangeClassOnScroll({
      backgroundElement: '.hero',
      backgroundElement2: '.layout-bg',
      overElement: '.circle-link'
    }); 

    new ChangeClassOnScroll({
      backgroundElement: '.hero',
      backgroundElement2: '.layout-bg',
      overElement: '.hamburger'
    }); 

    new scrollOutHero({
      backgroundElement: '.hero',
      overElement: '.header'
    });

    new Sticky('.scroll-element__link');

    new isInViewport({
      element: '.categories',
      className: 'is-in-viewport'
    });

    new FormHelp({
      element: '.form-field'
    });

    new smoothScroll({
      element: 'nav ul.nav__level-1 li a'
    });

    new scrollToFirstSection({
      element: '.go-to-button'
    });

    new Menu();
  });
})();   
