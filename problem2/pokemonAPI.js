const axios = require('axios');

const url = 'https://pokeapi.co/api/v2/';

const getTotalPokemonsByType = async (type) => {
    try {
        const response = await axios.get(`${url}type/${type}`);
        return response.data.pokemon.length;
    } catch (error) {
        console.error(error);
    }
}

const getPokemonsWithTwoTypes = async (type1, type2) => {
    try {
        const response1 = await axios.get(`${url}type/${type1}`);
        const response2 = await axios.get(`${url}type/${type2}`);
        const pokemonsWithType1 = response1.data.pokemon.map(p => p.pokemon.name);
        const pokemonsWithType2 = response2.data.pokemon.map(p => p.pokemon.name);
        return pokemonsWithType1.filter(p => pokemonsWithType2.includes(p));
    } catch (error) {
        console.error(error);
    }
}

const getPokemonNumber = async (name) => {
    try {
        const response = await axios.get(`${url}pokemon/${name}`);
        return response.data.id;
    } catch (error) {
        console.error(error);
    }
};

const getPokemonStats = async (number) => {
    try {
        const response = await axios.get(`${url}pokemon/${number}`);
        return response.data.stats.map(stat => ({
            name: stat.stat.name,
            base_stat: stat.base_stat
        }));
    } catch (error) {
        console.error(error);
    }
};

const getPokemonsWithSorting = async (ids, sortBy) => {
    try {
        const pokemons = [];
        for (const id of ids) {
            const response = await axios.get(`${url}pokemon/${id}`);
            pokemons.push({
                name: response.data.name,
                type: response.data.types.map(t => t.type.name).join(', '),
                weight: response.data.weight
            });
        }
        return pokemons.sort((a, b) => a[sortBy] > b[sortBy] ? 1 : -1);
    } catch (error) {
        console.error(error);
    }
};

const checkPokemonType = async (number, type) => {
    try {
        const response = await axios.get(`${url}pokemon/${number}`);
        return response.data.types.some(t => t.type.name === type);
    } catch (error) {
        console.error(error);
    }
};


module.exports = {
    getTotalPokemonsByType,
    getPokemonsWithTwoTypes,
    getPokemonNumber,
    getPokemonStats,
    getPokemonsWithSorting,
    checkPokemonType
};