import { Pokemon as RenamePoke } from './classes.js';
import mockedPokemons from './mockedPokemons.js';
import fillPokemonCard from './seeder.js';
import * as func from './func.js'

const btn = document.querySelector('button');
const inputSearch = document.querySelector('.searchWrapper input');
const btnSearch = document.querySelector('.searchWrapper button');

const pokemonsList = mockedPokemons.map(makePokemon);

btn.addEventListener('click', (event) => {


    fetch('https://pokeapi.co/api/v2/pokemon').then(response =>{
    if (response.ok) {
        return response.json();
    } else {
        return Promise.reject(response);
    }
    })
    .then(data =>{
        return fetch(data.results[func.getRandom(0, data.results.length)].url)
    })
    .then(resp =>{
        if (resp.ok) {
            return resp.json();
        } else {
            return Promise.reject(resp);
        } 
    })
    .then(data =>{
        fillPokemonCard(makePokemon(data));
    })
    .catch(function (error){
        console.warn(error);
    })
});

btnSearch.addEventListener('click', ()=>{
    func.alertFunc(inputSearch);
});

document.addEventListener('keyup', (e)=>{
    if (e.code === 'Enter' || e.code === 'NumpadEnter'){
        func.alertFunc(inputSearch);
    }
})

function makePokemon(pokemon) {
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
        return new RenamePoke(name, abilitiesNames, experience, image);
    }
}

