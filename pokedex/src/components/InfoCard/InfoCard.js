import React, { Component } from 'react';

import classes from './InfoCard.module.css';

class InfoCard extends Component {
    state = {
        loadedPokemon: null,
        pokemonPicture: null,
    };

    componentDidUpdate() {
        if (this.props.id) {
            if (
                !this.state.loadedPokemon ||
                (this.state.loadedPokemon && this.state.loadedPokemon.pokeId !== this.props.id)
            ) {
                this.getStats(this.props.id);
            }
        }
    }
    getStats = async (id) => {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const res = await fetch(url);
        const pokemon = await res.json();
        const pokemonTypes = pokemon.types.map((types) => types.type.name);
        const pokeStats = {
            pokeId: pokemon.id,
            type: pokemonTypes,
            attack: pokemon.stats[1].base_stat,
            defence: pokemon.stats[2].base_stat,
            hp: pokemon.stats[0].base_stat,
            spAttack: pokemon.stats[3].base_stat,
            spDefence: pokemon.stats[4].base_stat,
            speed: pokemon.stats[5].base_stat,
            weight: pokemon.weight,
            moves: pokemon.moves.length,
        };
        const pokePicture = `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`;
        console.log(pokeStats);
        this.setState({ loadedPokemon: pokeStats, pokemonPicture: pokePicture });
    };

    render() {
        let info = null;
        if (this.props.id) {
            info = <p>Loading...</p>;
        }
        if (this.state.loadedPokemon) {
            info = (
                <div className={classes.infoContainer} onClick={this.props.clicked}>
                    <div className={classes.infoCard}>
                        <div className={classes.imgContainer}>
                            <img src={this.state.pokemonPicture} alt='' />
                        </div>
                        <table>
                            <tr>
                                <th>Attack</th>
                                <td>{this.state.loadedPokemon.attack}</td>
                            </tr>
                            <tr>
                                <th>Defence</th>
                                <td>{this.state.loadedPokemon.defence}</td>
                            </tr>
                            <tr>
                                <th>HP</th>
                                <td>{this.state.loadedPokemon.hp}</td>
                            </tr>
                            <tr>
                                <th>SP Attack</th>
                                <td>{this.state.loadedPokemon.spAttack}</td>
                            </tr>
                            <tr>
                                <th>SP Defence</th>
                                <td>{this.state.loadedPokemon.spDefence}</td>
                            </tr>
                            <tr>
                                <th>Speed</th>
                                <td>{this.state.loadedPokemon.speed}</td>
                            </tr>
                            <tr>
                                <th>Weight</th>
                                <td>{this.state.loadedPokemon.weight}</td>
                            </tr>
                            <tr>
                                <th>Total Moves</th>
                                <td>{this.state.loadedPokemon.moves}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            );
        }
        return info;
    }
}

export default InfoCard;
