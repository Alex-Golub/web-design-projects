// Setting current date
const date = (document.getElementById(
  "date"
).innerHTML = new Date().getFullYear());

// Hamburger toggle functionality
const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");

navBtn.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

// Navbar fixation
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  // console.log(window.pageYOffset);
  window.pageYOffset > 35
    ? navbar.classList.add("fixed")
    : navbar.classList.remove("fixed");
});

// Smooth scrolling
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // prevent scrolling to section
    links.classList.remove("show-links"); // hide navbar when link clicked
    const id = e.target.getAttribute("href").slice(1);
    const ele = document.getElementById(id);

    let pos = navbar.classList.contains("fixed")
      ? ele.offsetTop - 65
      : ele.offsetTop - 125;

    if (window.innerWidth < 992) {
      pos = navbar.classList.contains("fixed")
        ? ele.offsetTop - 65
        : ele.offsetTop - (326 + 65);
    }

    window.scrollTo({
      left: 0,
      top: pos,
      behavior: "smooth",
    });
  });
});
