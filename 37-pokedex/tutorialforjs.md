Roadmap To Rewrite The JavaScript Yourself:

**1. Setting Up:**

- Create a variable named `poke_container` and use `document.getElementById("poke-container")` to assign the HTML element with the ID "poke-container" to it. This will store the container where you'll display all the Pokémon.
- Define a variable named `pokemon_count` and set it to the desired number of Pokémon you want to fetch (in this case, 150).

**2. Color Palette:**

- Create a JavaScript object named `colors` to store the background colors for different Pokémon types. Each property name represents a type (e.g., "fire", "water"), and the corresponding value is the hexadecimal color code (e.g., "#FDDFDF" for fire).

**3. Available Types:**

- Create a variable named `main_types` and use `Object.keys(colors)` to get an array containing all the type names (property names) from the `colors` object. This will be used to filter the primary type for each Pokémon.

**4. Fetching Pokémon:**

- Define an asynchronous function named `fetchPokemons`.
- Use a `for` loop to iterate through a range from 1 to `pokemon_count`.
  - Inside the loop, call the `getPokemon` function (defined later) and pass the current loop counter (`i`) as the argument, which represents the Pokémon ID. This will trigger fetching data for each Pokémon.

**5. Get Individual Pokémon Data:**

- Define an asynchronous function named `getPokemon` that takes an `id` (Pokémon ID) as an argument.
- Construct the API URL for the specific Pokémon using string interpolation: `"https://pokeapi.co/api/v2/pokemon/${id}"`.
- Use `fetch` to retrieve data from the API URL.
- Use `await res.json()` to convert the response to a JavaScript object containing the Pokémon's details.
- Call the `createPokemonCard` function (defined later) and pass the retrieved Pokémon data (`data`) as an argument.

**6. Creating the Pokémon Card:**

- Define a function named `createPokemonCard` that takes a `pokemon` object (containing Pokémon data) as an argument.
- Create a new HTML element of type `div` using `document.createElement("div")`.
- Add the class name "pokemon" to the newly created element using `pokemonEl.classList.add("pokemon")`.
- Extract the Pokémon's name, capitalize the first letter, and store it in a variable called `name`. You can use string manipulation techniques for this.
- Convert the Pokémon's ID to a string and pad it with leading zeros if necessary (to ensure 3 digits) and store it in a variable called `id`.
- Extract an array of the Pokémon's types using `pokemon.types.map((type) => type.type.name)`. This iterates through the `types` array and gets the actual type names.
- Use the `find` method on the `main_types` array to identify the primary type from the available types. The condition checks if the index of the type name (`type`) exists within the `poke_types` array.
- Use the `color` object to retrieve the background color based on the primary type.
- Set the background color of the `pokemonEl` using `pokemonEl.style.backgroundColor = color`.

**7. Building the Card's HTML Structure:**

- Create a string variable named `pokemonInnerHTML` containing the HTML structure for the Pokémon card. This string uses template literals (backticks) for readability and includes:
  - An `img-container` div with an image tag to display the Pokémon's sprite (source URL constructed using the ID).
  - An `info` div containing:
    - A `span` with the Pokémon's ID prefixed with "#".
    - An `h3` element for the Pokémon's name.
    - A `small` element with the Pokémon's type information using a `span` to highlight the type name.

**8. Populating the Card:**

- Set the `innerHTML` property of `pokemonEl` to the `pokemonInnerHTML` string. This injects the HTML structure into the element.

**9. Adding the Card to the Container:**

- Use `poke_container.appendChild(pokemonEl)` to add the newly created Pokémon card element (`pokemonEl`) as a child of the `poke_container` element. This essentially displays the card on the webpage.

**10. Initiate Fetching:**

-- Using `fetchPokemons()`;
