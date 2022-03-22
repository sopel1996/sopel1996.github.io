import * as func from "./func.js";

const btn = document.querySelector(".pokebol");
const inputSearch = document.querySelector(".searchWrapper input");
const btnSearch = document.querySelector(".searchBtn");
const ClearPokeStorage = document.querySelector(".ClearPokeStorage");
const ClearField = document.querySelector(".ClearField");
ClearPokeStorage.addEventListener("click", () => {
    localStorage.setItem("pokeArray", JSON.stringify([]));
});
ClearField.addEventListener("click", () => {
    document.querySelector('.card-list').innerHTML='';
});

btn.addEventListener("click", (event) => {
  func.getPoke(func.getRandom(0, 1126));
});

btnSearch.addEventListener("click", () => {
  func.searchFunc(inputSearch.value);
  inputSearch.value = "";
});

var pokeLocal = localStorage.getItem("pokeArray") || [];

if (pokeLocal.length) {
  let pokeArray = JSON.parse(pokeLocal);
  pokeArray.forEach((el) => {
    func.getPoke(el);
  });
} else {
}
