const list = document.querySelector("#challenge-list ul");
const forms = document.forms;
function removeIt(e) {
  if (e.target.className === "read") {
    const li = e.target.parentElement;
    list.removeChild(li);
  }
}
list.addEventListener("click", removeIt);

// add challenges
const addForm = forms["add-challenge"];
addForm.addEventListener("submit", function(e) {
  e.preventDefault();

  // create elements
  const value = addForm.querySelector('input[type="text"]').value;
  const li = document.createElement("li");
  const challengeName = document.createElement("span");
  const deleteBtn = document.createElement("span");

  // add text content
  challengeName.textContent = value;
  deleteBtn.textContent = "read it";

  // add classes
  challengeName.classList.add("name");
  deleteBtn.classList.add("read");

  // append to DOM
  li.appendChild(challengeName);
  li.appendChild(deleteBtn);
  list.appendChild(li);
});
