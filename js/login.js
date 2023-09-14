const DUMMY_USERNAME = "test@luxpmsoft.com";
const DUMMY_PASSWORD = "test1234!";

function loginHandler(username, password) {
  if (username !== "" && password !== "") {
    if (username !== DUMMY_USERNAME) {
      alert("Username does not exist");
      return;
    }
    if (password !== DUMMY_PASSWORD) {
      alert("Wrong combination");
      return;
    }
    window.location.href = "about:blank";
  } else {
    alert("Password or username empty");
  }
}

function passwordInputHandler(event) {
  event.target.value = event.target.value.replace(/\s/g, "");
}

function main() {
  const passwordElement = document.getElementById("password");
  const usernameElement = document.getElementById("username");
  const loginElement = document.getElementById("login-button");

  passwordElement.addEventListener("input", passwordInputHandler);

  loginElement.addEventListener("click", function (event) {
    event.preventDefault();
    loginHandler(usernameElement.value, passwordElement.value);
  });
}

document.addEventListener("DOMContentLoaded", function (event) {
  main();
});
