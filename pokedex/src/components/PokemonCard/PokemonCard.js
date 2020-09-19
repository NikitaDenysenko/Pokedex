import React, { Component } from 'react';

import PokemonType from '../PokemonType/PokemonType';
import classes from './PokemonCard.module.css';

class PokemonCard extends Component {
    
    render() {
        const pokemonTypes = this.props.pokemonTypes.map((type) => {
            return <PokemonType type={type} />
        }) 
        return (
            <div className={classes.pokemon} onClick={this.props.clicked}>
                <div className={classes.imgContainer}>
                    <img src={this.props.pokemonImage} alt=""/>
                </div>
                <div className={classes.info}>
                    <span className={classes.number}>
                        #{this.props.pokemonId}
                    </span>
                    <h3 className={classes.name}>{this.props.pokemonName}</h3>
                    <small className={classes.type}><span className={classes.types}>{pokemonTypes}</span></small>
                </div>
            </div>
        );
    }
}

export default PokemonCard;
