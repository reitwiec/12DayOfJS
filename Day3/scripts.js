//Let's get our elements here

const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressbar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

function togglePlay() {
  const status = video.paused ? "play" : "pause";
  video[status]();
}

toggle.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);

// Adding the pause and play event listener

function updateSymbol() {
  const symbol = this.paused ? `►` : `▮▮`;
  toggle.textContent = symbol;
}

video.addEventListener("play", updateSymbol);
video.addEventListener("pause", updateSymbol);

function ourSkipFunction() {
  const skip = this.dataset.skip; // this gives us a string
  video.currentTime += parseFloat(skip);
}

skipButtons.forEach(button =>
  button.addEventListener("click", ourSkipFunction)
);

//Handle ranges below

function rangeUpdate() {
  video[this.name] = this.value;
}
ranges.forEach(range => range.addEventListener("change", rangeUpdate));

function handleProgress() {
  const percentage = (video.currentTime / video.duration) * 100;
  progressbar.style.flexBasis = `${percentage}%`;
}
video.addEventListener("timeupdate", handleProgress);

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}
progress.addEventListener("click", scrub);

const fullscreenBtn = player.querySelector("[data-fullscreen]");
fullscreenBtn.addEventListener("click", () => player.requestFullscreen());
