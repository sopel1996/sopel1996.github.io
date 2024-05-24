import { Pokemon } from "./classes.js";
import fillPokemonCard from "./seeder.js";

export function searchFunc(inputSearch) {
  if (inputSearch === "") {
    alert("Введите имя покемона!");
  } else {
    var pokeLocal = localStorage.getItem("pokeArray") || [];
    let pokeArray = [];
    if (pokeLocal.length) {
      pokeArray = JSON.parse(pokeLocal);
    }
    if (pokeArray.indexOf(inputSearch) === -1) {
      getPoke(inputSearch.toLowerCase());
    } else {
      alert("Такой покемон уже на поле!");
    }
  }
}
export function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export function getPoke(nameOrId) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`)
    .then((response) => {
      if (response.ok) {
        pushToLocalStorage(nameOrId);
        return response.json();
      } else {
        return Promise.reject(response);
      }
    })
    .then((data) => {
      fillPokemonCard(makePokemon(data));
    })
    .catch(function (error) {
      console.warn(error);
      alert("Покемон не найден!");
    });
}
export function makePokemon(pokemon) {
  {
    const {
      name,
      abilities,
      base_experience: experience,
      sprites: { front_default: image },
    } = pokemon;
    const abilitiesNames = abilities.map((el) => {
      const {
        ability: { name },
      } = el;
      return name;
    });
    return new Pokemon(name, abilitiesNames, experience, image);
  }
}
export function pushToLocalStorage(nameOrId) {
  var pokeLocal = localStorage.getItem("pokeArray") || [];
  let pokeArray = [];
  if (pokeLocal.length) {
    pokeArray = JSON.parse(pokeLocal);
  }
  if (pokeArray.indexOf(nameOrId) === -1) {
    pokeArray.push(nameOrId);
    localStorage.setItem("pokeArray", JSON.stringify(pokeArray));
  }
}
