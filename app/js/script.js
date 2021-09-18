const menuBtn = document.querySelector("#menu-btn");
const mobileMenu = document.querySelector("#mobile-menu");
const projects = document.querySelector("#projects-link");
const about = document.querySelector("#about-link");
const contact = document.querySelector("#contact-link");
const github = document.querySelector("#github-link");
const overlay = document.querySelector(".nav__list");

menuBtn.addEventListener("click", () => {
  if (menuBtn.classList.contains("menu-toggle")) {
    menuBtn.classList.remove("menu-toggle");
    mobileMenu.classList.remove("anim-fade-in");
    mobileMenu.classList.remove('open');
    mobileMenu.classList.add("anim-fade-out");
  } else {
    menuBtn.classList.add("menu-toggle");
    mobileMenu.classList.add("open");
    mobileMenu.classList.remove("anim-fade-out");
    mobileMenu.classList.add("anim-fade-in");
  }
});

projects.addEventListener('click', () => {
    if (menuBtn.classList.contains("menu-toggle")) {
    menuBtn.classList.remove("menu-toggle");
    mobileMenu.classList.remove("anim-fade-in");
    mobileMenu.classList.remove('open');
    mobileMenu.classList.add("anim-fade-out");
    }
});

about.addEventListener("click", () => {
  if (menuBtn.classList.contains("menu-toggle")) {
    menuBtn.classList.remove("menu-toggle");
    mobileMenu.classList.remove("anim-fade-in");
    mobileMenu.classList.remove("open");
    mobileMenu.classList.add("anim-fade-out");
  }
});

contact.addEventListener("click", () => {
  if (menuBtn.classList.contains("menu-toggle")) {
    menuBtn.classList.remove("menu-toggle");
    mobileMenu.classList.remove("anim-fade-in");
    mobileMenu.classList.remove("open");
    mobileMenu.classList.add("anim-fade-out");
  }
});

github.addEventListener("click", () => {
  if (menuBtn.classList.contains("menu-toggle")) {
    menuBtn.classList.remove("menu-toggle");
    mobileMenu.classList.remove("anim-fade-in");
    mobileMenu.classList.remove("open");
    mobileMenu.classList.add("anim-fade-out");
  }
});

overlay.addEventListener("click", () => {
  if (menuBtn.classList.contains("menu-toggle")) {
    menuBtn.classList.remove("menu-toggle");
    mobileMenu.classList.remove("anim-fade-in");
    mobileMenu.classList.remove("open");
    mobileMenu.classList.add("anim-fade-out");
  }
});