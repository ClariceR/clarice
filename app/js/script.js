const menuBtn = document.querySelector("#menu-btn");
const mobileMenu = document.querySelector("#mobile-menu");
const projects = document.querySelector("#projects-link");
const skills = document.querySelector("#skills-link");
const about = document.querySelector("#about-link");
const contact = document.querySelector("#contact-link");
const github = document.querySelector("#github-link");
// const overlay = document.querySelector(".overlay-menu-mobile");

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

skills.addEventListener("click", () => {
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
//   menuBtn.classList.toggle("menu-toggle");

//   !menuBtn.classList.contains("menu-toggle")
//     ? mobileMenu.classList.remove("open")
//     : mobileMenu.classList.add("open");
// });
