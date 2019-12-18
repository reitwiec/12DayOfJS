let lightThemeStatus = true;

const lightTheme = {
  background: "#fafafa",
  navbarBackground: "#eeeeee",
  buttonBackground: "#1d1d1d",
  buttonText: "#eeeeee",
  content: "#000",
  inboxBackground: "#fff",
  inboxCrossed: "#F9F9F9",
  logoUrl: "url(https://miro.medium.com/max/968/1*F6SrJR7_s95r6oCF3ugMZw.png)"
};

const darkTheme = {
  background: "#303030",
  navbarBackground: "#212121",
  buttonBackground: "#6fefb0",
  buttonText: "#212121",
  content: "#ffffff",
  inboxBackground: "#424242",
  inboxCrossed: "#212121",
  logoUrl: "url(https://miro.medium.com/max/968/1*uLuWzCXfq2rt1t_TkuLB8A.png)"
};

const toggleButton = document.querySelector(".switch-btn");

function switchTheme() {
  lightThemeStatus = !lightThemeStatus;
  let currentTheme = lightThemeStatus ? lightTheme : darkTheme;
  for (var i = 0; i < Object.keys(currentTheme).length; i++) {
    document.documentElement.style.setProperty(
      `--${Object.keys(currentTheme)[i]}`,
      currentTheme[Object.keys(currentTheme)[i]]
    );
  }
}

toggleButton.addEventListener("click", switchTheme);

// Checkbox challenge code
let lastChecked;
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

function handleCheck(e) {
  let userChecksFlag = false;
  let userUnchecksFlag = false;
  if (e.shiftKey && this.checked) {
    //let's start looping here
    checkboxes.forEach(checkbox => {
      //let's check if the current 'checkbox' is
      //one of the references

      if (checkbox === this || checkbox === lastChecked) {
        //now we need to set the checkboxStatus to true
        userChecksFlag = !userChecksFlag;
        if (userChecksFlag) {
          console.log("Start to check the elements in the middle!");
          console.log(checkbox);
        } else {
          console.log(checkbox);
          console.log("End here!");
        }
      } else {
        console.log(checkbox);
      }

      //after we cross our first reference the checkboxStatus is set to true
      //we can start 'checking' the boxes that follow the encountered reference
      if (userChecksFlag) {
        checkbox.checked = true; //if the status is true, we'll 'check' the checkbox
      }
    });
  }
  //similar steps for unchecking
  if (e.shiftKey && !this.checked) {
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked) {
        userUnchecksFlag = !userUnchecksFlag;
      }
      if (userUnchecksFlag) {
        checkbox.checked = false;
      }
    });
    lastChecked.checked = false;
  }
  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener("click", handleCheck));

//Till here
