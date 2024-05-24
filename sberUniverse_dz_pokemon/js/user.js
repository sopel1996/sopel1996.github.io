const user = localStorage.getItem("user") || '';
const clearUserNameBtn = document.querySelector(".ClearUsernameBtn");
const [closeModalSpan] = document.getElementsByClassName("close");
const modal = document.querySelector(".modal");
const login = document.querySelector(".login");
const welcomeMsg = document.querySelector("h1");

clearUserNameBtn.addEventListener("click", () => {
  localStorage.setItem("user", "");
  welcomeMsg.innerText = "";
});


closeModalSpan.onclick = function () {
  modal.style.display = "none";
};

login.addEventListener("submit", (event) => {
  event.preventDefault();
  const userName = event.target.children[0].value;
  localStorage.setItem("user", userName);
  welcomeMsg.innerText = ` Привет, ${userName}!`;
  modal.style.display = "none";
  // POST запрос на бек
});

if (user === "") {
  modal.style.display = "flex";
} else {
  welcomeMsg.innerText = ` Привет, ${user}!`;
}
