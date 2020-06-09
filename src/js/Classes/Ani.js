import anime from 'animejs/lib/anime.es.js';

class Ani {
  constructor() {
    this.home = document.querySelector('body.home');
    this.sun = document.querySelector('#sun');
    this.mountain = document.querySelector('#mountain');
    this.map = document.querySelector('#map');
    this.heart = document.querySelector('#heart');
    this.question = document.querySelector('#question');
    
    if(this.home) {
      this.bindEvents();
    }
  }
  bindEvents() {
    this.sun.parentNode.parentNode.parentNode.addEventListener("mouseenter", ()=> {
      this.anisun(document.querySelectorAll('.tile svg .strahl'));
    });
    this.mountain.parentNode.parentNode.parentNode.addEventListener("mouseenter", ()=> {
      this.animountain(document.querySelectorAll('.tile svg#mountain'), document.querySelectorAll('.tile svg#mountain g'));
    });
    this.map.parentNode.parentNode.parentNode.addEventListener("mouseenter", ()=> {
      this.animap(document.querySelectorAll('.tile #map .point'));
    });
    this.heart.parentNode.parentNode.parentNode.addEventListener("mouseenter", ()=> {
      this.aniheart(document.querySelector('.tile #heart #Icon_ionic-ios-heart'), document.querySelector('.tile #heart #Icon_ionic-ios-heart-2'));
    });
    this.question.parentNode.parentNode.parentNode.addEventListener("mouseenter", ()=> {
      this.aniquestion(document.querySelector('.tile #question circle'));
    });
  }

  anisun(targets1) {
    let tl = anime.timeline({
      easing: 'easeOutExpo',
      duration: 400
    })
    .add({
      targets: targets1, 
      scale: 1.1,
      opacity: 0.5,
      delay: anime.stagger(50)
    }, '500')
    .add({
      targets: targets1, 
      scale: 1,
      opacity: 1,
      delay: anime.stagger(50)
    }, '1000')
    .add({
      targets: targets1, 
      scale: 1.1,
      opacity: 0.5,
      delay: anime.stagger(50)
    }, '1500')
    .add({
      targets: targets1, 
      scale: 1,
      opacity: 1,
      delay: anime.stagger(50)
    }, '2000')
    return tl.finished;
  }

  animountain(targets1, targets2) {
    anime.set(targets1, {overflow: 'hidden', translateY: '10px'});
    let tl = anime.timeline({
      easing: 'easeOutExpo',
      duration: 1000,
    })
    .add({
      targets: targets2, 
      translateY: '100px'
    })
    .add({
      targets: targets2, 
      translateY: '10px'
    })
    return tl.finished;
  }
  
  animap(targets1) {
    anime.set(targets1, {opacity: 0});
    let tl = anime.timeline({
      easing: 'easeOutExpo',
      duration: 1000
    })
    .add({
      targets: targets1, 
      opacity: 1,
      duration: 100,
      delay: anime.stagger(200)
    })
    return tl.finished;
  }

  aniheart(targets1, targets2) {
    let tl = anime.timeline({
      easing: 'easeOutExpo',
      duration: 2500
    })
    .add({
      targets: targets1, 
      rotate: '0deg',
      duration: 500
    })
    .add({
      targets: targets1, 
      rotate: '4deg',
      duration: 500
    })
    .add({
      targets: targets1, 
      rotate: '0deg',
      duration: 500
    })
    .add({
      targets: targets1, 
      rotate: '4deg',
      duration: 500
    })
    .add({
      targets: targets1, 
      rotate: '0deg',
      duration: 500
    })
    .add({
      targets: targets2, 
      rotate: '0deg',
      duration: 500
    }, '0')
    .add({
      targets: targets2, 
      rotate: '-4deg',
      duration: 500
    }, '500')
    .add({
      targets: targets2, 
      rotate: '0deg',
      duration: 500
    }, '1000')
    .add({
      targets: targets2, 
      rotate: '-4deg',
      duration: 500
    }, '1500')
    .add({
      targets: targets2, 
      rotate: '0deg',
      duration: 500
    }, '2000')
    return tl.finished;
  }

  aniquestion(targets1) {
    let tl = anime.timeline({
      easing: 'linear',
      duration: 1000,
      loop: 3
    })
    .add({
      targets: targets1, 
      opacity: [0, 1],
      delay: 250
    })
    return tl.finished;
  }
}

export default Ani;
