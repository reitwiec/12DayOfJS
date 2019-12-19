const nav = document.querySelector("#main");
const fromTop = nav.offsetTop;

function fixingNav() {
  if (window.scrollY >= fromTop) {
    document.body.style.paddingTop = nav.offsetHeight + "px";
    document.body.classList.add("fixed-nav");
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove("fixed-nav");
  }
}
window.addEventListener("scroll", fixingNav);
