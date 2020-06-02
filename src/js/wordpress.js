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
//import Pagetransition from './Classes/Pagetransition';
import barba from '@barba/core';
import anime from 'animejs/lib/anime.es.js';
 
// kick off the polyfill 
smoothscroll.polyfill(); 

const initAll = {
  init: () => {
  
    new ToTop();

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
      element2: '.footer__link-level-0'
    });

    new scrollToFirstSection({
      element: '.go-to-button'
    });

    new Menu();

    //new Pagetransition();
  }
};

(function() {document.addEventListener('DOMContentLoaded', () => {
  initAll.init();
});
})();   

barba.init({
  sync: true,
  transitions: [{
    name: 'default-transition',  
    leave({current}) {
      let tl = anime.timeline({
        easing: 'easeOutExpo',
        duration: 300
      })
      .add({
        targets: '.title-h1', 
        translateY: '50px',
        opacity: 0
      })
      .add({
        targets: barba.wrapper,
        translateX: '-100%',
      })
      .add({
        targets: barba.wrapper + ' .container',
        opacity: [1, 0],
        complete: function() {
          barba.wrapper.querySelector('.container').classList.add('test');
        }
      })
      /* .add({
        targets: '.transition',
        translateX: 0,
      })
      .add({
        targets: current.container + ' .hero',
        opacity: 0
      }); */
      return tl.finished;
    },
    /* beforeEnter({ next }) {
      next.container.style.zIndex = -1
    }, */
    enter({next}) {
       let tl = anime.timeline({
        easing: 'easeOutExpo',
        duration: 300,
        delay: 500
      })
      .add({
        targets: barba.wrapper,
        translateX: ['100%', 0],
      })
      .add({
        targets: barba.wrapper + ' .container',
        opacity: [0, 1],
        complete: function() {
          barba.wrapper.classList.add('after');
        }
      })
      .add({
        targets: ['.title-h1'], 
        translateY: ['50px', '0px'],
        opacity: [0, 1]
      })
      .add({
        targets: ['.go-to-button'], 
        translateY: ['50px', '0px'], 
        translateX: ['-50%', '-50%'], 
        opacity: [0, 1]
      })
      .add({
        targets: barba.wrapper,
        complete: function() {
          barba.wrapper.style.transform = 'none';
        }
      })
      /* .add({
        targets: '.content > *',
        translateY: '0',
        opacity: 1
      })
      .add({
        targets: '.transition',
        translateX: '-100%',
      })
      .add({
        targets: '.hero',
        opacity: [0, 1],
      })
      .add({
        targets: '.title-h1',
        opacity: [0, 1],
        translateY: ['20', '0'],
      })
      .add({
        targets: '.go-to-button',
        opacity: [0, 1],
        translateY: ['20', '0'],
        translateX: ['-50%', '-50%']
      }); */
      return tl.finished;
    }
  }]
});

barba.hooks.enter((page) => {
  window.scrollTo(0, 0);
});
 
barba.hooks.after((page) => {
  const xy = page.next.html; 
  let response = xy.replace(/(<\/?)body( .+?)?>/gi, '$1notbody$2>', xy);
  let matches = response.match(/notbody class=\"(.*?)\"/);  //returns array
  let bodyClasses = matches[1];
  document.querySelector('body').classList = bodyClasses;
  initAll.init(); 
});

barba.hooks.before(() => {
  document.querySelector('body').classList.add('is-animating');
});



/* barba.init({
  transitions: [{
    sync: true, // sync the transitions up so they occur concurrently
    appear({ // when you first load the website.
      current,
    }) {
      const targets = current.container; // target the current page container.
      const a = anime({ // new animations via anime js
        targets, // our current container
        opacity: [0, 1], // change opacity from 0 to 1.
        duration: 1500, // time in ms
        easing: 'linear', // easing function
      });

      return a.finished;
    },
    leave({ // leaving the current page
      current,
    }) {
      const targets = current.container; // target current page
      const a = anime({ // new animation
        targets, // current page
        opacity: [1, 0], // fade out from 1 to 0 opacity
        duration: 1500, //time in ms
        easing: 'linear', // easing function
      });

      return a.finished;
    },
    enter({ // entering the next page
      next,
    }) {
      const targets = next.container; // target the container of the next page
      const a = anime({ // new animation
        targets, // next page
        opacity: [0, 1], // fade in from 0 to 1 opacity
        duration: 1500, // time in ms
        easing: 'linear', // easing function
      });

      return a.finished;
    },
  }],
}); */
