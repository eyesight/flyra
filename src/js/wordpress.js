// Bundle theme module
import ToTop from './Classes/ToTop';
import ChangeClassOnScroll from './Classes/ChangeClassOnScroll';
import Sticky from './../../node_modules/sticky-js';
import isInViewport from './Classes/isInViewport';
import FormHelp from './Classes/FormHelp';
import smoothScroll from './Classes/smoothScroll';
import scrollToFirstSection from './Classes/scrollToFirstSection';

(function() {
  document.addEventListener('DOMContentLoaded', function() {
	
    new ToTop();

    new ChangeClassOnScroll({
      backgroundElement: '.hero',
      backgroundElement2: '.layout-bg',
      overElement: '.circle-link',
    });

   new ChangeClassOnScroll({
      backgroundElement: '.hero',
      backgroundElement2: '.layout-bg',
      overElement: '.nav',
    });

    new ChangeClassOnScroll({
      backgroundElement: '.hero',
      backgroundElement2: '.layout-bg',
      overElement: '.service-nav',
    }); 

    new ChangeClassOnScroll({
      backgroundElement: '.hero',
      backgroundElement2: '.layout-bg',
      overElement: '.header__logo-container',
    });

    new ChangeClassOnScroll({
      backgroundElement: '.hero',
      backgroundElement2: '.layout-bg',
      overElement: '.circle-link',
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
  });
})();   
