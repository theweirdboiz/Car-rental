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
const linkAction = (e) => {
  e.target.classList.remove("show-menu");
};
