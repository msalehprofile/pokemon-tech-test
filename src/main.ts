import "./styles/style.scss";

import  { pokemonArray } from "./data/pokemon";

const containerElement = document.querySelector(".card-container");
const searchBar = document.querySelector<HTMLInputElement>(".heading__input")

if(!containerElement || !searchBar) {
    throw new Error ("Issue with selectors");
}

if (searchBar.value == "") {
pokemonArray.forEach((pokemon) => {
containerElement.innerHTML += 
    `<div class="card">
        <img class="card__image" src="${pokemon.sprite}" alt="">
        <div class="card__content">
            <h1 class="card__heading">${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.slice(1)}</h1>
            <p class="card__text" >${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.slice(1)} (#${pokemon.id}) is a ${pokemon.types.join(" & ")} type pokemon.</p>
        </div>
    </div>`;
    })
}

const handleSearchBar = () => {
        console.log(searchBar.value)
    }

// trying extension
// pokemonArray.forEach((pokemon) => {
//     if(pokemon.name.includes(searchBar.value)) {
//         containerElement.innerHTML += 
//     `<div class="card">
//         <img class="card__image" src="${pokemon.sprite}" alt="">
//         <div class="card__content">
//             <h1 class="card__heading">${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.slice(1)}</h1>
//             <p class="card__text" >${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.slice(1)} (#${pokemon.id}) is a ${pokemon.types.join(" & ")} type pokemon.</p>
//         </div>
//     </div>`;
//     }})

searchBar.addEventListener("input",handleSearchBar)

