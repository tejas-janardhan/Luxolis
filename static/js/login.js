const DUMMY_USERNAME = "test@luxpmsoft.com";
const DUMMY_PASSWORD = "test1234!";

const PASSWORD_CHAR_REGEX = /[A-Za-z]/;
const PASSWORD_NUM_REGEX = /[\d]/;
const PASSWORD_SPEC_REGEX = /[#$@!%&*?]/;

function loginHandler(username, password) {
  if (username !== "" && password !== "") {
    if (username !== DUMMY_USERNAME) {
      alert("Username does not exist");
      return;
    }
    if (password !== DUMMY_PASSWORD) {
      alert("The provided password is wrong");
      return;
    }
    window.location.href = "/blank.html";
  } else {
    alert("Password or username empty");
  }
}

function passwordInputHandler(errorElem) {
  return function inner(event) {
    event.target.value = event.target.value.replace(/\s/g, "");
    if (
      !(
        PASSWORD_CHAR_REGEX.test(event.target.value) &&
        PASSWORD_NUM_REGEX.test(event.target.value) &&
        PASSWORD_SPEC_REGEX.test(event.target.value)
      )
    ) {
      errorElem.classList.remove("hidden");
    } else {
      errorElem.classList.add("hidden");
    }
  };
}

function main() {
  const passwordElement = document.getElementById("password");
  const usernameElement = document.getElementById("username");
  const loginElement = document.getElementById("login-button");
  const passwordErrElement = document.getElementById("password-error");

  passwordElement.addEventListener(
    "input",
    passwordInputHandler(passwordErrElement)
  );

  loginElement.addEventListener("click", function (event) {
    event.preventDefault();
    loginHandler(usernameElement.value, passwordElement.value);
  });
}

document.addEventListener("DOMContentLoaded", function (event) {
  main();
});
