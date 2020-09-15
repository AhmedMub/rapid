//first Section Animation
document.addEventListener('DOMContentLoaded', () => {
    anime({
      targets: '.animated-intro-sec',
      translateX: [-400, 0],
      easing: 'easeOutExpo',
      duration: 1500,
      delay: 3000,
      opacity: [0, 1]
    });
    anime({
      targets: '.animated-introSec-btn',
      translateY: [-5, 0],
      easing: 'easeInOutQuad',
      duration: 1000,
      delay: 3000,
      opacity: [0, 1]
    });
    anime({
      targets: '.social-icnos ul li',
      translateY: [-100, 0],
      easing: 'easeOutExpo',
      duration: 1000,
      delay: function(el, i, l) {
        return 3000 + i * 100;
      },
      endDelay: function(el, i, l) {
        return (l - i) * 100;
      },
      opacity: [0, 1]
    });
    anime({
      targets: '.navbarUl li',
      translateY: [-100, 0],
      easing: 'easeOutExpo',
      duration: 2000,
      delay: function(el, i, l) {
        return 3000 + i * 100;
      },
      endDelay: function(el, i, l) {
        return (l - i) * 100;
      },
      opacity: [0, 1]
    });
    anime({
      targets: 'h1',
      translateX: [-400, 0],
      easing: 'easeOutExpo',
      duration: 2000,
      delay: function(el, i, l) {
        return 3000 + i * 100;
      },
      endDelay: function(el, i, l) {
        return (l - i) * 100;
      },
      opacity: [0, 1]
    });
  });
  // typings info at intro section
let typed = new Typed(".typed-info", {
    strings: ["business!", "finance!", "marketing!"],
    typeSpeed: 60,
    smartBackspace: true,
    loop: true,
    backSpeed: 30,
    backDelay: 1600,
  });

//scroll animation for All Section
sal();

//Animate ************************** 

//about us section
const headerSec = document.querySelector('.about-observer');
let aboutOptions = {
  rootMargin: '-100px 0px'
};
let aboutObserver = new IntersectionObserver((entries, aboutObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      anime({
        targets: '.about-us .left-img',
        translateX: [-250, 0],
        easing: 'easeOutCubic',
        duration: 1000,
        opacity: [0, 1]
      });
      anime({
        targets: '.about-us .right-info',
        translateX: [250, 0],
        easing: 'easeOutCubic',
        duration: 1000,
        opacity: [0, 1]
      });
      aboutObserver.unobserve(entry.target);
    }
  });
}, aboutOptions);

aboutObserver.observe(headerSec);
//why choose us section
const chooserSec = document.querySelector('.why-choose-us');

let chooseObserver = new IntersectionObserver((entries, chooseObserver) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      anime({
        targets: '.why-choose-us .left',
        translateX: [100, 0],
        easing: 'easeOutCubic',
        duration: 1000,
        delay: 1000,
        opacity: [0, 1]
      });
      anime({
        targets: '.why-choose-us .right',
        translateX: [-100, 0],
        easing: 'easeOutCubic',
        duration: 1000,
        delay: 1000,
        opacity: [0, 1]
      });
      chooseObserver.unobserve(entry.target);
    }
  });
});

chooseObserver.observe(chooserSec);

//features section
const featuresSec = document.querySelector('.features-observer');

let featuresObserver = new IntersectionObserver((entries, featuresObserver) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      anime({
        targets: '.feature-inner .anime-feat1',
        translateX: [100, 0],
        easing: 'easeOutCubic',
        duration: 1000,
        delay: 1500,
        opacity: [0, 1]
      });
      anime({
        targets: '.feature-inner .anime-feat2',
        translateX: [-100, 0],
        easing: 'easeOutCubic',
        duration: 1000,
        delay: 1500,
        opacity: [0, 1]
      });
      featuresObserver.unobserve(entry.target);
    } 
  });
});

featuresObserver.observe(featuresSec);
//features section
const featuresSec2 = document.querySelector('.features-observer2');

let featuresSec2Observer = new IntersectionObserver((entries, featuresSec2Observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      anime({
        targets: '.feature-inner .anime-feat3',
        translateX: [100, 0],
        easing: 'easeOutCubic',
        duration: 1000,
        delay: 1500,
        opacity: [0, 1]
      });
      anime({
        targets: '.feature-inner .anime-feat4',
        translateX: [-100, 0],
        easing: 'easeOutCubic',
        duration: 1000,
        delay: 1500,
        opacity: [0, 1]
      });
      featuresSec2Observer.unobserve(entry.target);
    }
  });
});

featuresSec2Observer.observe(featuresSec2);
//services section
const servicesSec = document.querySelector('.h2Services');
let boxOptions = { };
let boxObserver = new IntersectionObserver((entries, boxObserver) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      //animate boxes
      anime({
        targets: '.animated-box',
        translateY: [200, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: (el, i) => {
          return 500 + 100 * i;
        },
        opacity: [0, 1]
      });
      //the icons
      let tl = anime({
        targets: '.animatedIcon',
        rotate: {
          value: 360,
          duration: 3000,
          easing: 'easeInOutSine',
          delay: 1000
        },
      });
      boxObserver.unobserve(entry.target);
    } 
  });
}, boxOptions);

boxObserver.observe(servicesSec);
//portfolio section
const portfolio = document.querySelector('.observe-port');
let portOption = { };
let portObserver = new IntersectionObserver((entries, portObserver) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      //animate boxes
      anime({
        targets: '.port-categories li',
        translateY: [-100, 0],
        easing: 'easeOutExpo',
        duration: 1000,
        delay: function(el, i, l) {
          return 1000 + i * 100;
        },
        endDelay: function(el, i, l) {
          return (l - i) * 100;
        },
        opacity: [0, 1]
      });
      anime({
        targets: '.images1 .hovereffect',
        translateY: [100, 0],
        easing: 'easeOutExpo',
        duration: 1300,
        delay: function(el, i, l) {
          return 1000 + i * 100;
        },
        endDelay: function(el, i, l) {
          return (l - i) * 100;
        },
        opacity: [0, 1]
      });

      portObserver.unobserve(entry.target);
    } 
  });
}, portOption);

portObserver.observe(portfolio);

//team section
const TeamSec = document.querySelector('.team-observer');
let teamSecObserver = new IntersectionObserver((entries, teamSecObserver) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      //animate boxes
      anime({
        targets: '.team-content .person-info',
        translateX: [-100, 0],
        easing: 'easeOutExpo',
        duration: 1000,
        delay: function(el, i, l) {
          return 1500 + i * 100;
        },
        endDelay: function(el, i, l) {
          return (l - i) * 100;
        },
        opacity: [0, 1]
      });

      teamSecObserver.unobserve(entry.target);
    } 
  });
});

teamSecObserver.observe(TeamSec);

//pricing section
const PricingSec = document.querySelector('.pricing-observer');
let pricingSecObserver = new IntersectionObserver((entries, pricingSecObserver) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      //animate boxes
      anime({
        targets: '.prices div',
        translateY: [100, 0],
        easing: 'easeOutExpo',
        duration: 1000,
        delay: function(el, i, l) {
          return 1500 + i * 100;
        },
        endDelay: function(el, i, l) {
          return (l - i) * 100;
        },
        opacity: [0, 1]
      });

      pricingSecObserver.unobserve(entry.target);
    } 
  });
});

pricingSecObserver.observe(PricingSec);

//Frequently Asked Questions section
const frqSec = document.querySelector('.frq-observer');
let frqSecObserver = new IntersectionObserver((entries, frqSecObserver) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      //animate boxes
      anime({
        targets: '.QA div',
        translateY: [100, 0],
        easing: 'easeOutExpo',
        duration: 1000,
        delay: function(el, i, l) {
          return 1500 + i * 100;
        },
        endDelay: function(el, i, l) {
          return (l - i) * 100;
        },
        opacity: [0, 1]
      });

      frqSecObserver.unobserve(entry.target);
    } 
  });
});

frqSecObserver.observe(frqSec);
