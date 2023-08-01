const {
  getTotalPokemonsByType,
  getPokemonsWithTwoTypes,
  getPokemonNumber,
  getPokemonStats,
  getPokemonsWithSorting,
  checkPokemonType
} = require('./pokemonAPI.js');

async function testFunctions() {
  const total = await getTotalPokemonsByType("grass");
  console.log(`Total Pokemons of Grass type: ${total}`);

  const pokemons = await getPokemonsWithTwoTypes("grass", "poison");
  console.log(`Pokemons with Grass and Poison type: ${pokemons}`);

  const number = await getPokemonNumber("bulbasaur");
  console.log(`Bulbasaur number: ${number}`);

  const stats = await getPokemonStats(1);
  console.log(`Bulbasaur stats: `, stats);

  const sortedPokemons = await getPokemonsWithSorting([1,2,3], 'name');
  console.log(`Sorted Pokemons by name: `, sortedPokemons);

  const checkType = await checkPokemonType(1, "grass");
  console.log(`Bulbasaur is of Grass type: ${checkType}`);
}

testFunctions().catch(console.error);
