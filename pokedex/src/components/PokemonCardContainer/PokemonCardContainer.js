import React, { Component } from 'react';

import PokemonCard from '../PokemonCard/PokemonCard';
import classes from './PokemonCardContainer.module.css';

class PokemonCardContainer extends Component {
    state = {
        pokemonData: [],
    };

    componentDidMount() {
        this.fetchPokemons();
    }

    fetchPokemons = async () => {
        for (let i = 1; i <= 12; i++) {
            await this.getPokemon(i);
        }
    };

    getPokemon = async (id) => {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const res = await fetch(url);
        const pokemon = await res.json();
        const pokeData = {
            name: pokemon.name[0].toUpperCase() + pokemon.name.slice(1),
            pokeId: pokemon.id.toString().padStart(3, '0'),
            pictureLink: `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`
        }
        this.setState({pokemonData: [...this.state.pokemonData, pokeData] })
    };

    render() {

        const pokemons = this.state.pokemonData.map((poke) => {
            return <PokemonCard  pokemonName={poke.name}  pokemonId={poke.pokeId} pokemonImage={poke.pictureLink}/>;
        });
        return <div className={classes.pokeContainer}>{pokemons}</div>;
    }
}

export default PokemonCardContainer;
