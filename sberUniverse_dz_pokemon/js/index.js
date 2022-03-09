import { Pokemon as RenamePoke } from './classes.js';
import mockedPokemons from './mockedPokemons.js';
import fillPokemonCard from './seeder.js';
import * as func from './func.js'

const btn = document.querySelector('button');
const inputSearch = document.querySelector('.searchWrapper input');
const btnSearch = document.querySelector('.searchWrapper button');

const pokemonsList = mockedPokemons.map((pokemon) => {
    const {
        name,
        abilities,
        base_experience: experience,
        sprites: { front_default: image },
    } = pokemon;
    // const { front_default: image } = sprites;
    // const abilitiesNames = abilities.map(el => el.ability.name);
    const abilitiesNames = abilities.map((el) => {
        const {
            ability: { name },
        } = el;
        return name;
    });
    return new RenamePoke(name, abilitiesNames, experience, image);
});

btn.addEventListener('click', (event) => {
    fillPokemonCard(pokemonsList[func.getRandom(0, pokemonsList.length-1)]);
});

btnSearch.addEventListener('click', ()=>{
    func.alertFunc(inputSearch);
});

document.addEventListener('keyup', (e)=>{
    if (e.code === 'Enter' || e.code === 'NumpadEnter'){
        func.alertFunc(inputSearch);
    }
})