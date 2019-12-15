let bufferArray = [];
let lastKeystrokeTime = Date.now();

//Our cheat code
const cheatcode = "unicorn";

window.addEventListener("keyup", e => {
  const key = e.key.toLowerCase();
  const latestKeystrokeTime = Date.now();

  if (latestKeystrokeTime - lastKeystrokeTime > 1500) {
    bufferArray = [];
  }

  bufferArray.push(key);

  const word = bufferArray.join("");
  if (word === cheatcode) {
    cornify_add();
  }

  lastKeystrokeTime = latestKeystrokeTime;

  console.log(bufferArray);
});
