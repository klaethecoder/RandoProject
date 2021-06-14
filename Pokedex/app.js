const pokedex = document.getElementById("pokedex");
const url = " https://pokeapi.co/api/v2/pokemon/";

function getPokemon(){
const promises = [];
for(let i=1;i<=150;i++){
promises.push(fetch(`${url}${i}`)
.then(stuff => stuff.json()))
}

Promise.all(promises)
.then(payload => {
    const pokemon = payload.map((result)=> ({
        name: result.name.toUpperCase(),
        image: result.sprites["front_default"],
        id: result.id,
        type: result.types.map(type => type.type.name).join(", ")
    }))
    addToPokedex(pokemon)
})

const addToPokedex = (monsters) => {
    const HTMLString = monsters.map(
        (creature) =>
    `<li class="card">
    <img class="card-image" src="${creature.image}"/>
    <h2 class="card-title"> Name: ${creature.name}</h2>
    <h3 class="card-title">Pokedex ID: ${creature.id}</h3>
        <p class="card-subtitle">Type: ${creature.type}</p>
    </li>`
        ).join("");
        
pokedex.innerHTML = HTMLString;
}

// .then(data => data)

}

getPokemon()
