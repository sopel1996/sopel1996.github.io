import * as func from './func.js';
export const updateForm = document.querySelector(".updateForm");
export const modal = document.querySelector(".modal");
const [closeModalSpan] = document.getElementsByClassName("close");

closeModalSpan.onclick = function () {
  modal.style.display = "none";
};
updateForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let id = updateForm.getAttribute("userId");
  func.updateUserSubmit(id);
  modal.style.display = "none";
});