// Left menu
document.querySelector('.sub a').onclick = function () {
    document.querySelector('#left-block').classList.toggle('vis');
    document.querySelector('.sub').classList.toggle('active');
 
    var moo = document.querySelectorAll('.arr');
    var active = moo[0];

    for( var i = 0; i < moo.length; i++ ){
    moo[i].addEventListener('click', function(){
        if( active == this ){
            this.closest('.subsub').classList.toggle('active');
        } else {
            active.closest('.subsub').classList.remove('active');
            this.closest('.subsub').classList.add('active');
            active = this;
        }
    });
    }

};


// Header dropdown menu
document.querySelector('.header-search svg').onclick = function () {
  document.querySelector('input').classList.toggle('active');
  document.querySelector('.header-search').classList.toggle('visible');
}
document.querySelector('.header-search.show svg').onclick = function () {
  document.querySelector('input').classList.toggle('active');
  document.querySelector('.header-search.show').classList.toggle('visible');
}
document.querySelector('.right-part__block.pr .link').onclick = function () {
    document.querySelector('.right-part__block.pr').classList.toggle('active');
}
document.querySelector('.right-part__block.lang .link').onclick = function () {
  document.querySelector('.right-part__block.lang').classList.toggle('active');
}
document.querySelector('.right-part__block.app .link').onclick = function () {
  document.querySelector('.popups.app').classList.toggle('active');
}
document.querySelector('.app.show').onclick = function () {
  document.querySelector('.popups.app').classList.toggle('active');
}


// More details -- adaptive
if (document.querySelector('.block_more')) {
  let blocks = document.querySelectorAll( ".block_more" );
  for( let i = 0; i < blocks.length; i++) {
      blocks[i].querySelector('.block_more_link').onclick = function () {
      blocks[i].querySelector('.block.sh').classList.toggle('active');
    }
  }	
}

// Change View list
if (document.querySelector('.view-sort__bl__button')) {
  // do some stuff
  document.querySelector('.view-sort__bl__button.ln').onclick = function () {
    this.classList.add('active');
    document.querySelector('.view-sort__bl__button.gr').classList.remove('active');
    document.querySelector('.list').classList.add('view-blocks');
    let blocks = document.querySelectorAll( ".fourd-col" );
    for( let i = 0; i < blocks.length; i++){
      blocks[i].classList.add('list');
    }
  }
  document.querySelector('.view-sort__bl__button.gr').onclick = function () {
    this.classList.add('active');
    document.querySelector('.view-sort__bl__button.ln').classList.remove('active');
    document.querySelector('.list').classList.remove('view-blocks');
    let blocks = document.querySelectorAll( ".fourd-col" );
    for( let i = 0; i < blocks.length; i++){
      blocks[i].classList.remove('list');
    }
  }
  
}


// Load more
if (document.querySelector('.loadmore')) {
const loadmore = document.querySelector('.loadmore');
    let currentItems = 4;
    loadmore.addEventListener('click', (e) => {
        const elementList = [...document.querySelectorAll('.fl-block.list .fourd-col')];
        for (let i = currentItems; i < currentItems + 4; i++) {
            if (elementList[i]) {
                elementList[i].style.display = 'inline-block';
            }
        }
        currentItems += 4;
        if (currentItems >= elementList.length) {
            event.target.style.display = 'none';
        }
    })

}


// Scroll to top
const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top");
const scrollContainer = () => {
  return document.documentElement || document.body;
};
const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth"
  });
};
document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});
backToTopButton.addEventListener("click", goToTop);


// Plus - minus input
plusMinusWidgets = document.querySelectorAll(".v-counter");
for (var i = 0; i < plusMinusWidgets.length; i++) {
  plusMinusWidgets[i].querySelector(".minusBtn").addEventListener("click", clickHandler);
  plusMinusWidgets[i].querySelector(".plusBtn").addEventListener("click", clickHandler);
}
function clickHandler(event) {
  var countEl = event.target.parentNode.querySelector(".count");
  if (event.target.className.match(/\bminusBtn\b/) && (countEl.value > 1) ) {
    countEl.value = Number(countEl.value) - 1;
  } else if (event.target.className.match(/\bplusBtn\b/)) {
    countEl.value = Number(countEl.value) + 1;
  }
  triggerEvent(countEl, "change");
};
function triggerEvent(el, type){
   if ('createEvent' in document) {
      // modern browsers, IE9+
      var e = document.createEvent('HTMLEvents');
      e.initEvent(type, false, true);
      el.dispatchEvent(e);
    } else {
      // IE 8
      var e = document.createEventObject();
      e.eventType = type;
      el.fireEvent('on'+e.eventType, e);
    }
}


// Slider on Product page
if (document.querySelector('.prod__slide')) {
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("prod__slide");
  var dots = document.getElementsByClassName("thumb");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
}


// Popups
if (document.querySelector('.button.popup')) {
  document.querySelector('.button.popup').onclick = function () {
    document.querySelector('#events').classList.add('active');
  }
  document.querySelector('.button.cookies').onclick = function () {
    document.querySelector('.popups.cookies').classList.toggle('active');
  }
  document.querySelector('.button.birthday').onclick = function () {
    document.querySelector('.popups.birthday').classList.toggle('active');
  }
  document.querySelector('.close').onclick = function () {
    document.querySelector('#events').classList.remove('active');
  }
}

// Modile menu
if (document.querySelector('.header-menu.icon')) {
  document.querySelector('.header-menu.icon').onclick = function () {
    document.querySelector('#left-block').classList.toggle('active');
  }
}
document.querySelector('#overlay-button').onclick = function () {
  document.querySelector('#smenu-lang').classList.remove('active');
  document.querySelector('#dirlist').classList.remove('active');
  document.querySelector('#left-block').classList.remove('vis');
  document.querySelector('#maining').classList.toggle('fixed');
  document.querySelector('footer').classList.toggle('fixed');
}
document.querySelector('#smenu-lang__link').onclick = function () {
  document.querySelector('#smenu-lang').classList.toggle('active');
}

// Calendar
if (document.querySelector('.c-datepicker-btn')) {
const picker = new MaterialDatePicker().
  on('submit', val => {
    document.querySelector('#calendar-date').innerHTML = val.format('DD');
  });
document.querySelector('.c-datepicker-btn').addEventListener('click', () => picker.open());
}