// Bundle theme module
import Helper from "./Classes/Helper";
import barba from '@barba/core';
import anime from 'animejs/lib/anime.es.js';

import ChangeClassOnScroll from './Classes/ChangeClassOnScroll';
import Sticky from './../../node_modules/sticky-js';
import isInViewport from './Classes/isInViewport';
import FormHelp from './Classes/FormHelp';
import smoothScroll from './Classes/smoothScroll';
import scrollToFirstSection from './Classes/scrollToFirstSection';
import Menu from './Classes/Menu';
import scrollOutHero from './Classes/scrollOutHero';
import smoothscroll from 'smoothscroll-polyfill';
import Ani from './Classes/Ani';
 
// kick off the polyfill 
smoothscroll.polyfill(); 

const initAll = {
  init: () => {
    new ChangeClassOnScroll({
      backgroundElement: '.hero',
      backgroundElement2: '.layout-bg',
      overElement: '.circle-link',
    });

    new ChangeClassOnScroll({
      backgroundElement: '.hero',
      backgroundElement2: '.layout-bg',
      overElement: '.service-nav',
    }); 

    new ChangeClassOnScroll({
      backgroundElement: '.hero',
      backgroundElement2: '.layout-bg',
      overElement: '.circle-link'
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
      element: 'nav ul.nav__level-1 li a',
      element2: '.nav__link-level-1'
    });

    new smoothScroll({
      element: '.footer__left-ul li a',
      element2: '.footer__left-nav .footer__link-level-0'
    });

    new scrollToFirstSection({
      element: '.go-to-button'
    });

    new Menu();

    new Ani();
    
    Helper.addClass(document.querySelector('body'), 'is-loaded');
    
  }
};

(function() {document.addEventListener('DOMContentLoaded', () => {
  initAll.init();
});
})();   

barba.init({
  transitions: [{
    sync: false,
    name: 'default-transition',  
    from: {
      // define a custom rule based on the trigger class
      custom: ({ trigger }) => {
        return (trigger.classList && (trigger.classList.contains('circle-link__a') || trigger.classList.contains('category-title__link'))) || (trigger.parentNode.classList && trigger.parentNode.classList.contains('transition-blue'));
      }
    },
    leave({current}) {
      let tl = anime.timeline({
        easing: 'easeOutExpo',
        duration: 400
      })
      .add({
        targets: '.transition', 
        translateX: ['100%', 0],
        translateY: [0, 0]
      }) 
      .add({
        complete: function() {
          barba.wrapper.querySelector('.container').classList.add('end-transition-out');
        }
      })
      return tl.finished;
    },
    /* beforeEnter({ next }) {
      next.container.style.zIndex = -1
    }, */
    enter({next}) {
       let tl = anime.timeline({
        easing: 'easeOutExpo',
        duration: 400
      })
      .add({
        targets: '.transition', 
        translateX: [0, '100%'],
        translateY: [0, 0],
        duration: 10
      })
      .add({
        targets: barba.wrapper,
        translateY: ['20px', 0],
        opacity: [0, 1]
      })
      .add({
        targets: barba.wrapper + ' .container',
        opacity: [0, 1],
        complete: function() {
          barba.wrapper.classList.add('after');
        }
      })
      .add({
        targets: barba.wrapper,
        complete: function() {
          barba.wrapper.style.transform = 'none';
        }
      })
      return tl.finished;
    }
  },
  {
    sync: false,
      name: 'blue-transition',  
      from: {
        // define a custom rule based on the trigger class
        custom: ({ trigger }) => {
          return (trigger.classList && trigger.classList.contains('close-button__link')) || trigger === 'back';
        }
      },
      leave({current}) {
        let tl = anime.timeline({
          easing: 'easeOutExpo',
          duration: 400
        })
        .add({
          targets: barba.wrapper,
          translateY: [0, '20px'],
          opacity: [1, 0]
        })
        .add({
          complete: function() {
            barba.wrapper.querySelector('.container').classList.add('end-transition-out');
          }
        })
        return tl.finished;
      },
      /* beforeEnter({ next }) {
        next.container.style.zIndex = -1
      }, */
      enter({next}) {
        console.log(next.container);
        console.log(barba.wrapper);
        let tl = anime.timeline({
          easing: 'easeOutExpo',
          duration: 400
        })
        .add({ 
          targets: barba.wrapper,
          opacity: [0, 1],
          duration: 10,
          complete: function() {
            barba.wrapper.style.transform = 'none';
          }
        })
        .add({
          targets: '.transition', 
          translateX: [0, '100%'],
          translateY: [0, 0]
        }) 
        return tl.finished;
      }
  }]
});

barba.hooks.enter((page) => {
  window.scrollTo(0, 0);
  document.querySelector('body').classList.add('is-animating-b');
});

barba.hooks.after((page) => {
  //add the classes of wordpress to the body-element
  const xy = page.next.html; 
  let response = xy.replace(/(<\/?)body( .+?)?>/gi, '$1notbody$2>', xy);
  let matches = response.match(/notbody class=\"(.*?)\"/);  //returns array
  let bodyClasses = matches[1];
  document.querySelector('body').classList = bodyClasses;
  initAll.init(); 
  ga('set', 'page', window.location.pathname);
  ga('send', 'pageview');

  if(bodyClasses.match('category-about') && bodyClasses.match('category-about')[0]) {
    location.reload();
  }
});

barba.hooks.before(() => {
  document.querySelector('body').classList.remove('is-loaded');
  document.querySelector('body').classList.add('is-animating');
});