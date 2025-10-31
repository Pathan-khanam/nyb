// //fetch is a function in js used for making HTTP requests to fetch resources.
// //(JSON style data, images,files)
// // simplifies asynchronous data fetching in js and used for interacting with APIs to retrieve and send data asynchoronously ove the web.
// // fetch(url),{options}) 
// //              {method:"Get"}

 async function fetchData() {
      const pokemonName = document.getElementById("pokemonName").value.trim().toLowerCase();
      const imgElement = document.getElementById("pokemonSprite");
      const errorElement = document.getElementById("error");

      imgElement.style.display = "none";  // Hide image initially
      errorElement.textContent = "";  // Clear previous error messages

      if (!pokemonName) {
        errorElement.textContent = "Please enter a Pokémon name.";
        return;
      }

      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!response.ok) {
          throw new Error("Pokémon not found. Please check the name.");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;

        if (pokemonSprite) {
          imgElement.src = pokemonSprite;
          imgElement.style.display = "block";  // Show image after loading
        } else {
          errorElement.textContent = "No image found for this Pokémon.";
        }
      } catch (error) {
        errorElement.textContent = error.message;  // Show error message
      }
    }