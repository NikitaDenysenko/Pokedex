import React, { Component } from 'react';

import classes from './PokemonCard.module.css';

class PokemonCard extends Component {

    render() {
        
        return (
            <div className={classes.pokemon}>
                <div className={classes.imgContainer}>
                    <img src={this.props.pokemonImage} alt=""/>
                </div>
                <div className={classes.info}>
                    <span className={classes.number}>
                        #{this.props.pokemonId}
                    </span>
                    <h3 className={classes.name}>{this.props.pokemonName}</h3>
                </div>
            </div>
        );
    }
}

export default PokemonCard;
