import React, { Component } from 'react';

import PokemonCard from '../PokemonCard/PokemonCard';
import InfoCard from '../InfoCard/InfoCard';

import classes from './PokemonCardContainer.module.css';

class PokemonCardContainer extends Component {
    state = {
        pokemonData: [],
        selectedPokemonId: null,
        pokemonStats: null
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
        const pokemonTypes = pokemon.types.map((types) => types.type.name);
        const pokeData = {
            name: pokemon.name[0].toUpperCase() + pokemon.name.slice(1),
            pokeId: pokemon.id,
            pokePicture: `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`,
            pokeTypes: pokemonTypes,
        };
        //.toString().padStart(3, '0')

        this.setState({ pokemonData: [...this.state.pokemonData, pokeData] });
    };

    // getStats = async (id) => {
    //     const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    //     const res = await fetch(url);
    //     const pokemon = await res.json();
    //     const pokemonTypes = pokemon.types.map((types) => types.type.name);
    //     const pokeStats = {
    //         pokeId: pokemon.id,
    //         type: pokemonTypes,
    //         attack: pokemon.stats[1].base_stat,
    //         defence: pokemon.stats[2].base_stat,
    //         hp: pokemon.stats[0].base_stat,
    //         spAttack: pokemon.stats[3].base_stat,
    //         spDefence: pokemon.stats[4].base_stat,
    //         speed: pokemon.stats[5].base_stat,
    //         weight: pokemon.weight,
    //         moves: pokemon.moves.length,
    //     };
    //     console.log(pokeStats);
    //     return pokeStats;
    // };

    pokeSelectedHandler = (id) => {
        this.setState({selectedPokemonId: id})
    }

    render() {
        //console.log(this.state.pokemonData)
        const pokemons = this.state.pokemonData.map((poke) => {
            return (
                <PokemonCard
                    pokemonName={poke.name}
                    pokemonId={poke.pokeId}
                    pokemonImage={poke.pokePicture}
                    pokemonTypes={poke.pokeTypes}
                    onClick={this.printHello}
                    clicked={() => this.pokeSelectedHandler(poke.pokeId)}
                />
            );
        });
        return (
            <div className={classes.pokeContainer}>
                {pokemons}
                <InfoCard id={this.state.selectedPokemonId} stats={this.state.pokemonStats}/>
            </div>
        );
    }
}

export default PokemonCardContainer;
