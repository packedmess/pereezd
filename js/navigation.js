let subnavigationAbout = document.querySelector('.subnavigation__about');
let subnavigationToggleAbout = document.querySelector('.subnavigation-toggle-about');
let subnavigationServices = document.querySelector('.subnavigation__services');
let subnavigationToggleServices = document.querySelector('.subnavigation-toggle-services');
let navigationMain = document.querySelector('.navigation');
let navigationToggle = document.querySelector('.header__navigation-toggle');

let navToggle = function(x, y) {
  y.onclick = function(a) {
  a.preventDefault();
  y.classList.toggle('navigation--close');
  y.classList.toggle('navigation--open');
  x.classList.toggle('navigation--closed');
  x.classList.toggle('navigation--opened');
};
};

let subnavigationToggle = function(x, y) {
  y.onclick = function(a) {
  a.preventDefault();
  y.classList.toggle('subnavigation-toggle--close');
  y.classList.toggle('subnavigation-toggle--open');
  x.classList.toggle('subnavigation--close');
  x.classList.toggle('subnavigation--open');
};
};

subnavigationToggle(subnavigationAbout, subnavigationToggleAbout);
subnavigationToggle(subnavigationServices, subnavigationToggleServices);
navToggle(navigationMain, navigationToggle);