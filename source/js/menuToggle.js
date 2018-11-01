var navMain = document.querySelector('.main-nav');
var headerMain = document.querySelector('.page-header');
var navToggle = document.querySelector('.main-nav__toggle');

headerMain.classList.remove('page-header--opened');
navMain.classList.remove('main-nav--nojs');
navMain.classList.remove('main-nav--opened');
navMain.classList.add('main-nav--closed');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    headerMain.classList.add('page-header--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    headerMain.classList.remove('page-header--opened');
  }
});
