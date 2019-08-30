var url = "https://pokeapi.co/api/v2/pokedex/1/?offset=0&limit=20";
var iid;
function openDetail() {
    
    var character_div = document.getElementsByClassName("PokemonCard")
    for (i=0;i<character_div.length;i++) {
        var character = character_div[i]
        character.addEventListener("click",function (e) {
            var div_clicked = e.target.parentNode
            iid = div_clicked.id
            HTML =`
            <p>${iid}</p>
            `
            var newtab = window.open("detail2.html","_self");
            newtab.insertAdjacentHTML("beforeend", HTML)  
        }) 
    }
    return iid;
}
console.log(iid)
function renderPokemonID(IDs) {
    // var content = document.getElementsByClassName("content")[0]
    // content.textContent=""
    for (var i = 0; i <IDs.length; i++){
        var Pokemon = IDs[i];
        var pokemonID = Pokemon.entry_number;
        var pokemon_name = Pokemon.pokemon_species.name;
        var imgSrc = 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/'+pokemon_name+'.png';
        var pokemonHTML=`
        <div id="${pokemonID}" class="PokemonCard">
          
                    <img id="img" src="${imgSrc}">
               
                    <small id="PokemonID">#${pokemonID}</small>
                    <br>
                    <small id="PokemonName">${pokemon_name}</small>
                    <br>
     
        </div>
        
            `;
            content.insertAdjacentHTML("beforeend", pokemonHTML);

        }
        openDetail()
    }


  
function fetchPokemonID(){
    var fullURL = `${url}`;
    sendGetRequest(fullURL, function(Pokemonss) {
        var IDs = Pokemonss.pokemon_entries;
        renderPokemonID(IDs)
    });
}
function fetchPokemonsDes(){
    var fullURL = `${url}`;
    sendGetRequest(fullURL, function(PokemonsDes) {
        var Pokemon_des = PokemonsDes
        renderPokemonsDes(Pokemon_des)
    });
}
// function setUpEvents() {
//     var btnSearch = document.getElementById("btn_search");
//     btnSearch.addEventListener("click", function(e){
//     var searchBar = document.getElementById("search_bar");
//     var searchString = searchBar.value;
//     var key = marvelKey(privateKey, publicKey);
//     var fullURL=`${url}?${key}&nameStartsWith=${searchString}`;
//     sendGetRequest(fullURL, function(responseData){
//         var Pokemons = responseData.data.results;
//         renderPokemonID(IDs)
//     })
// });      
// }

fetchPokemonID();
// setUpEvents();

