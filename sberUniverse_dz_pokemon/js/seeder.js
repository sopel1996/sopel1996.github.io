const cardList = document.querySelector(".card-list");

export default function fillPokemonCard(pokemon) {
  const card = document.createElement("div");
  card.classList.add("card");

  const imageWrap = document.createElement("div");
  imageWrap.classList.add("image");

  const image = document.createElement("img");
  image.src = pokemon.image;

  imageWrap.append(image);
  card.append(imageWrap);

  const properties = document.createElement("div");
  properties.classList.add("properties");

  const title = document.createElement("h3");
  title.innerText = pokemon.name;

  properties.append(title);

  const propText = document.createElement("p");
  propText.innerText = `Experience ${pokemon.experience}`;
  properties.append(propText);

  card.append(properties);

  const description = document.createElement("div");
  description.classList.add("description");

  const descText = document.createElement("p");
  descText.innerHTML = `
        <h4> Abilities: </h4>
        <ul>
        ${pokemon.abilities.map((el) => `<li>${el}</li>`).join("")}
        </ul>
    `;
  description.append(descText);
  card.append(description);

  cardList.append(card);
}
