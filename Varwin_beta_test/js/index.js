// project select
const prjSelect = document.querySelector("#project");
const prjSelect_title = prjSelect.querySelector(".__select__title");
const prjSelect_label = prjSelect.querySelectorAll(".__select__label");

// Toggle menu
prjSelect_title.addEventListener("click", () => {
  if ("active" === prjSelect.getAttribute("data-state")) {
    prjSelect.setAttribute("data-state", "");
  } else {
    prjSelect.setAttribute("data-state", "active");
  }
});

// Close when click to option
for (let i = 0; i < prjSelect_label.length; i++) {
  prjSelect_label[i].addEventListener("click", (evt) => {
    prjSelect_title.textContent = evt.target.textContent;
    prjSelect.setAttribute("data-state", "");
  });
}

// budget select
const budgetSelect = document.querySelector("#budget");
const budgetSelect_title = budgetSelect.querySelector(".__select__title");
const budgetSelect_label = budgetSelect.querySelectorAll(".__select__label");

// Toggle menu
budgetSelect_title.addEventListener("click", () => {
  if ("active" === budgetSelect.getAttribute("data-state")) {
    budgetSelect.setAttribute("data-state", "");
  } else {
    budgetSelect.setAttribute("data-state", "active");
  }
});

// Close when click to option
for (let i = 0; i < budgetSelect_label.length; i++) {
  budgetSelect_label[i].addEventListener("click", (evt) => {
    budgetSelect_title.textContent = evt.target.textContent;
    budgetSelect.setAttribute("data-state", "");
  });
}

const actualBtn = document.getElementById("addFile");

const fileChosen = document.getElementById("fileChosen");

actualBtn.addEventListener("change", function () {
  fileChosen.textContent = this.files[0].name;
});
