const menuBtn = document.querySelector("#menu-btn");
const mobileMenu = document.querySelector("#mobile-menu");
const projects = document.querySelector("#projects-link");
const about = document.querySelector("#about-link");
const contact = document.querySelector("#contact-link");
const github = document.querySelector("#github-link");
// const overlay = document.querySelector(".overlay-nav-menu-mobile");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("menu-toggle");

  !menuBtn.classList.contains("menu-toggle")
    ? mobileMenu.classList.remove("open")
    : mobileMenu.classList.add("open");
});

projects.addEventListener("click", () => {
  menuBtn.classList.toggle("menu-toggle");

  !menuBtn.classList.contains("menu-toggle")
    ? mobileMenu.classList.remove("open")
    : mobileMenu.classList.add("open");
});

about.addEventListener("click", () => {
  menuBtn.classList.toggle("menu-toggle");

  !menuBtn.classList.contains("menu-toggle")
    ? mobileMenu.classList.remove("open")
    : mobileMenu.classList.add("open");
});

contact.addEventListener("click", () => {
  menuBtn.classList.toggle("menu-toggle");

  !menuBtn.classList.contains("menu-toggle")
    ? mobileMenu.classList.remove("open")
    : mobileMenu.classList.add("open");
});

github.addEventListener("click", () => {
  menuBtn.classList.toggle("menu-toggle");

  !menuBtn.classList.contains("menu-toggle")
    ? mobileMenu.classList.remove("open")
    : mobileMenu.classList.add("open");
});

// overlay.addEventListener("click", () => {
//   if (menuBtn.classList.contains("menu-toggle")) {
//     menuBtn.classList.remove("menu-toggle");
//     mobileMenu.classList.remove("anim-fade-in");
//     mobileMenu.classList.remove("open");
//     mobileMenu.classList.add("anim-fade-out");
//   }
// });
