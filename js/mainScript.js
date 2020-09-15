//page on load 
window.onload = () => {
  setTimeout(function() {this.scrollTo(0, 0);},200);
}

//spinner
document.addEventListener('DOMContentLoaded', () => {
  let spinner = document.querySelector('.spinner');
  setTimeout(() => {
    spinner.remove();
    document.body.classList.remove('body-hidden');
  }, 3000);
});

//header window hight
const header = document.querySelector("header");

function headerHeight(param) {
  let wind = window.innerHeight;
  param.style.height = wind + "px";
}
headerHeight(header);


//Navbar small screen
const icons = document.getElementById("navIcons");
const overlay = document.querySelector(".overlay");
const ulNav = document.querySelector(".navbarUl");
const navItem = document.querySelectorAll(".navbarUl li a");
const innerIcons = document.querySelectorAll(".nav-icons span");
icons.onclick = () => {
  overlay.classList.toggle("disabled");
  ulNav.classList.toggle("enableUl");
  icons.firstElementChild.classList.toggle("disabled");
  icons.lastElementChild.classList.toggle("disabled");
  document.body.classList.toggle("body-hidden");
};
navItem.forEach(el => {
  el.addEventListener('click', () => {
  overlay.classList.toggle("disabled");
  ulNav.classList.toggle("enableUl");
  icons.firstElementChild.classList.toggle("disabled");
  icons.lastElementChild.classList.toggle("disabled");
  document.body.classList.toggle("body-hidden");
  });
});


//navbar fixed on scroll
const scrolledNav = document.querySelector(".menu");
const intersecting = document.querySelector(".social-icnos");
let options = {};

let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      scrolledNav.classList.add("on-scroll");
    } else {
      scrolledNav.classList.remove("on-scroll");
    }
  });
}, options);

observer.observe(intersecting);


//count up numbers
let secStatice = document.querySelector(".inner");

let staticeOptions = {};

let observerStatice = new IntersectionObserver((entries, observerStatice) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      $(document).ready(function () {
        $(".number").countTo();
      });
    }
  });
}, staticeOptions);

observerStatice.observe(secStatice);

//portfolio gallery
const ulLi = Array.from(document.querySelectorAll(".port-categories li a"));
let theImg = document.querySelectorAll(".images1 div");

ulLi.forEach((li) => {
  li.addEventListener(
    "click",
    (event) => {
      ulLi.forEach((e) => {
        e.classList.remove("active-clr");
      });

      li.classList.add("active-clr");

      let value = li.textContent;

      theImg.forEach((img) => {
        img.classList.add("disabled-img");
        if (img.dataset.index == value || value == "all") {
          img.classList.remove("disabled-img");
        }
      });

      event.preventDefault();
    },
    false
  );
});

//portfolio plugin
$(function () {
  var $obj = lc_lightbox("#lcl_elems_wrapper a");
});

// testimonials carousal 
const slides = Array.from(document.querySelectorAll('.slides .slide'));
const indicators = document.querySelector('.indicators');
let activeSlide = 1;



let theUl = document.createElement('ul');
theUl.setAttribute('id', 'UlId');
indicators.appendChild(theUl);

//add ul li indicators 
for (let i = 1; i <= slides.length; i++) {

  //the li
  let theLi = document.createElement('li');
  theUl.appendChild(theLi);
  theLi.setAttribute('data-index', i);
}

const createdLi = Array.from(document.querySelectorAll('#UlId li'));
//Add active to each slide
function AddActiveSlide() {
  activatedRemoved();
  slides[activeSlide - 1].classList.add('item-activated');
  createdLi[activeSlide - 1].classList.add('active-li');
}


//remove activated 
function activatedRemoved() {
  slides.forEach((e) => {
    e.classList.remove('item-activated');
  });

  createdLi.forEach((e) => {
    e.classList.remove('active-li');
  });
}

AddActiveSlide();

for (let i = 0; i < createdLi.length; i++) {


  createdLi[i].onclick = () => {

    activeSlide = parseInt(createdLi[i].getAttribute('data-index'));
    AddActiveSlide();
  };
}

let slideNumber = 1;

setInterval(() => {

  let testing = parseInt(Math.ceil(Math.random() * slides.length));
  activeSlide = testing;
  AddActiveSlide();
  
}, 3000);

//Frequently Questions fns
const bulbs = document.querySelectorAll('.per-QA');

//This code is for the wrapper(.per-QA) on clicking***********************
bulbs.forEach((e) => {
  e.addEventListener("click", () => {

    const answers  = e.lastElementChild;
    const heading = e.childNodes[3].lastElementChild;

    e.classList.toggle('colordH4'); 

    if (e.classList.contains('colordH4')) {
      answers.style.maxHeight = answers.scrollHeight + 'px';
      heading.classList.remove('disabled');

    } else {
      answers.style.maxHeight = 0;
      heading.classList.add('disabled');
    }
  });
});

//scroll top btn disabled
const scrollTop = document.querySelector('.scroll-top'); 
window.onscroll = () => {
  if (window.pageYOffset >= 300) {
    scrollTop.style.opacity = "1";
  } else {
    scrollTop.style.opacity = "0";
  }
}
scrollTop.onclick = () => {
  this.scrollTo(0, 0);
}

 



