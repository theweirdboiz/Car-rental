"use strict";
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const navMenu = $("#nav__menu");
const navToggle = $("#nav__toggle");
const navClose = $("#nav__close");
// Toggle menu
if (navToggle) {
  navToggle.onclick = () => {
    navMenu.classList.toggle("show-menu");
  };
}
if (navClose) {
  navClose.onclick = () => {
    navToggle.click();
  };
}
// Remove menu mobile
const navLinks = document.querySelectorAll(".nav__link");
if (navLinks) {
  for (const navLink of navLinks) {
    navLink.onclick = () => {
      navToggle.click();
    };
  }
}
// Change background header
const header = document.querySelector("#header");
window.onscroll = () => {
  if (window.scrollY >= 50) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
};
// Popular Swiper
const swiperPopular = new Swiper(".popular__container", {
  loop: true,
  spaceBetween: 24,
  slidesPerView: "auto",
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});
