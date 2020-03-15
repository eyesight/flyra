// Bundle theme module
import ToTop from './Classes/ToTop';
import scrollOutHero from './Classes/scrollOutHero';
import CopyElement from './Classes/CopyElements';
import ChangeClassOnScroll from './Classes/ChangeClassOnScroll';

(function() {
  document.addEventListener('DOMContentLoaded', function() {
	
    new ToTop();

    new CopyElement({
      element: '.header__logo-container'
    })

    new ChangeClassOnScroll({
      backgroundElement: '.hero',
      overElement: '.nav',
    });

    new scrollOutHero({
      backgroundElement: '.hero',
      overElement: '.header__logo-container--white',
      isHeight: true
    });

    new scrollOutHero({
      backgroundElement: '.hero',
      overElement: '.circle-link__svg-white',
      isHeight: true
    });

    new scrollOutHero({
      backgroundElement: '.hero',
      overElement: '.service-nav--white',
      isHeight: false
    });

  });
})();   
