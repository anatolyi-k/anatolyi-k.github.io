document.querySelector('.sub a').onclick = function () {
    document.querySelector('#left-block').classList.toggle('vis');
    document.querySelector('.sub').classList.toggle('active');
 
    var moo = document.querySelectorAll('.arr');
    var active = moo[0];

    for( var i = 0; i < moo.length; i++ ){
    moo[i].addEventListener('click', function(){
        if( active == this ){
            this.closest('li.subsub').classList.toggle('active');
        } else {
            active.closest('li.subsub').classList.remove('active');
            this.closest('li.subsub').classList.add('active');
            active = this;
        }
    });
    }

};


document.querySelector('.header-search svg').onclick = function () {
    document.querySelector('input').classList.toggle('active');
    document.querySelector('.header-search').classList.toggle('visible');
}
document.querySelector('.right-part__block.pr .link').onclick = function () {
    document.querySelector('.right-part__block.pr').classList.toggle('active');
}
document.querySelector('.right-part__block.lang .link').onclick = function () {
    document.querySelector('.right-part__block.lang').classList.toggle('active');
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
