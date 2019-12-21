const slider = document.querySelector(".items");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", e => {
  isDown = true;
  slider.classList.add("active");

  pageX = e.pageX;
  startX = pageX - slider.offsetLeft;

  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mousemove", e => {
  if (!isDown) return;

  e.preventDefault(); //stop any weird stuff
  const x = e.pageX - slider.offsetLeft;

  const deviation = x - startX;
  slider.scrollLeft = scrollLeft - deviation;
});
