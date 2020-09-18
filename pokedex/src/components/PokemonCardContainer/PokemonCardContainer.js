import React, { Component } from 'react';
import axios from 'axios';

import PokemonCard from '../PokemonCard/PokemonCard';
//import classes from './PokemonCardContainer.module.css'

class PokemonCardContainer extends Component {
    state = {
        pokemonData: [],
    };

    componentDidMount() {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=24').then((res) => {
            this.setState({ pokemonData: res.data.results });
            console.log(res.data.results);
        });
    }

    // fetchPokemons = async () => {
    //     for (let i = 1; i <= 150; i++) {
    //         await this.getPokemon(i);
    //     }
    // };

    // getPokemon = async (id) => {
    //     const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    //     const res = await fetch(url);
    //     const pokemon = await res.json();
    //     // console.log(pokemon);
    //     // const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    //     // const pokeId = pokemon.id;
    //     // const pictureLink = `https://pokeres.bastionbot.org/images/pokemon/${pokeId}.png`
    //     //this.setState({pokemonName: name, pokemonId: pokeId, pokemonImage: pictureLink})
    //     console.log(pokemon)
    // };

    render() {
        const pokemons = this.state.pokemonData.map((poke) => {
            return <PokemonCard pokemonId={poke.id} pokemonName={poke.name}/>
        });

        console.log(this.state.pokemonData)

        // const name = this.state.pokemonData.name[0].toUpperCase() + this.state.pokemonData.name.slice(1);
        // const pokeId = this.state.pokemonData.id;
        // const pictureLink = `https://pokeres.bastionbot.org/images/pokemon/${pokeId}.png`;

        // pokemons = (
        //     <div>
        //         {this.state.pokemonData.map(pokemon => {
        //             return <PokemonCard
        //                 pokemonName={name}
        //                 pokemonId={pokeId}
        //                 pokemonImage={pictureLink}
        //             />
        //         })}
        //     </div>
        // )

        return (
            <div>
                <h2>PokemonCardContainer</h2>
                {pokemons}
            </div>
        );
    }
}

export default PokemonCardContainer;
