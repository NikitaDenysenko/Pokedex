import React, { Component } from 'react';

import PokemonCard from '../PokemonCard/PokemonCard';
import InfoCard from '../InfoCard/InfoCard';

import classes from './PokemonCardContainer.module.css';

class PokemonCardContainer extends Component {
    state = {
        pokemonData: [],
        selectedPokemonId: null,
        pokemonStats: null,
        startIndex: 1,
        endIndex: 12,
    };

    componentDidMount() {
        this.fetchPokemons(this.state.startIndex, this.state.endIndex);
    }

    fetchPokemons = async (start, end) => {
        for (let i = start; i <= end; i++) {
            await this.getPokemon(i);
        }
        this.setState({ startIndex: start, endIndex: end });
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

    pokeSelectedHandler = (id) => {
        this.setState({ selectedPokemonId: id });
    };

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
            <div className={classes.container}>
                <div className={classes.pokeContainer}>
                    {pokemons}
                    <button className={classes.loadMoreButton}
                        onClick={() =>
                            this.fetchPokemons(this.state.startIndex + 12, this.state.endIndex + 12)
                        }>
                        Load More
                    </button>
                </div>
                <InfoCard
                    className={classes.infoContainer}
                    id={this.state.selectedPokemonId}
                    stats={this.state.pokemonStats}
                />
            </div>
        );
    }
}
// <InfoCard id={this.state.selectedPokemonId} stats={this.state.pokemonStats}/>
export default PokemonCardContainer;
