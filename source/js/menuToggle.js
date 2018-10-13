var navMain = document.querySelector('.main-nav');
var headerMain = document.querySelector('.page-header');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');
headerMain.classList.remove('page-header--opened');

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
