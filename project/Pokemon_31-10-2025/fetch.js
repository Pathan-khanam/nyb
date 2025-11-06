// // //fetch is a function in js used for making HTTP requests to fetch resources.
// // //(JSON style data, images,files)
// // // simplifies asynchronous data fetching in js and used for interacting with APIs to retrieve and send data asynchoronously ove the web.
// // // fetch(url),{options}) 
// // //              {method:"Get"}

async function fetchData() {
      const pokemonName = document.getElementById("pokemonName").value.trim().toLowerCase();
      const imgElement = document.getElementById("pokemonSprite");
      const errorElement = document.getElementById("error");
      const nameDisplayElement = document.getElementById("pokemonNameDisplay");
      const body = document.body;

      imgElement.style.display = "none";
      errorElement.textContent = "";
      nameDisplayElement.textContent = ""; // Reset the name display

      // Reset background and class for each search
      body.classList.remove("pikachu", "mewtwo", "bulbasaur", "charizard","snorlax", "jigglypuff", "vaporeon", "eevee");
      body.classList.add("default-background"); // Reset to default background

      if (!pokemonName) {
        errorElement.textContent = "Please enter a Pokémon name.";
        return;
      }

      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!response.ok) throw new Error("Pokémon not found!");

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;

        if (pokemonSprite) {
          imgElement.src = pokemonSprite;
          imgElement.style.display = "block";
        } else {
          errorElement.textContent = "No image found for this Pokémon.";
        }

        // Apply background styles based on Pokémon
        if (pokemonName === 'pikachu') {
          body.classList.add('pikachu');
        } else if (pokemonName === 'mewtwo') {
          body.classList.add('mewtwo');
        } else if (pokemonName === 'bulbasaur') {
          body.classList.add('bulbasaur');
        } else if (pokemonName === 'charizard') {
          body.classList.add('charizard');
         } else if (pokemonName === 'snorlax') {
          body.classList.add('snorlax');
        } else if (pokemonName === 'jigglypuff') {
          body.classList.add('jigglypuff');
        } else if (pokemonName === 'vaporeon') {
          body.classList.add('vaporeon');
        } else if (pokemonName === 'eevee') {
          body.classList.add('eevee');
        } else {
          body.classList.add('default-background'); // If no special Pokémon, use default
        }

        // Highlight the character name
        nameDisplayElement.textContent = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1); // Capitalize the first letter
        nameDisplayElement.classList.add("highlighted");
    
      } catch (error) {
        errorElement.textContent = error.message;
      }
    }