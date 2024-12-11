const base_url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const container = document.querySelector('div[class="container"]');


for (let i = 1; i <= 151; i++) {

    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon');
    const newImg = document.createElement('img');
    newImg.src = `${base_url}${i}.png`;
    const label = document.createElement('span');
    label.innerText = `${i}`;

    pokemon.append(newImg, label);
    container.appendChild(pokemon);


}