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
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1024: {
      spaceBetween: 48,
    },
  },
});
// Mixitup filter featured
const mixerFeatured = mixitup(".featured__content", {
  selectors: {
    target: ".featured__card",
  },
  animation: {
    duration: 300,
  },
});
// Link active featured
const linksFeatured = $$(".featured__item");
const removeActive = () => {
  linksFeatured.forEach((link) => link.classList.remove("active-featured"));
};
for (const link of linksFeatured) {
  link.onclick = () => {
    removeActive();
    link.classList.add("active-featured");
  };
}
// Scroll section active link

const sections = Array.from($$("section[id]"));

function scrollActive() {
  const scrollY = window.pageYOffset;
  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 58;
    const sectionId = section.getAttribute("id");
    console.log(section);
    // console.log($(`.nav__menu a[href='#${sectionId}']`));
    // if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
    //   $(`.nav__menu a[href='#${sectionId}']`).classList.add("active-link");
    // } else {
    //   $(`.nav__menu a[href='#${sectionId}']`).classList.remove("active-link");
    // }
  });
}
window.addEventListener("scroll", scrollActive);
// Show scroll up
const scrollUpBtn = $("#scrollup");
window.onscroll = () => {
  if (window.scrollY >= 350) {
    scrollUpBtn.classList.add("show-scroll");
  } else {
    scrollUpBtn.classList.remove("show-scroll");
  }
};
