import React, { Component } from 'react';
import colors from '../../assets/colors.js';

class PokemonType extends Component {
    render() {
        let typeColor = null;
        switch (this.props.type) {
            case 'fire':
                typeColor = colors.fire;
                break;
            case 'grass':
                typeColor = colors.grass;
                break;
            case 'electric':
                typeColor = colors.electric;
                break;
            case 'water':
                typeColor = colors.water;
                break;
            case 'ground':
                typeColor = colors.ground;
                break;
            case 'rock':
                typeColor = colors.rock;
                break;
            case 'fairy':
                typeColor = colors.fairy;
                break;
            case 'poison':
                typeColor = colors.poison;
                break;
            case 'bug':
                typeColor = colors.bug;
                break;
            case 'dragon':
                typeColor = colors.dragon;
                break;
            case 'psychic':
                typeColor = colors.psychic;
                break;
            case 'flying':
                typeColor = colors.flying;
                break;
            case 'fighting':
                typeColor = colors.fighting;
                break;
            case 'normal':
                typeColor = colors.normal;
                break;
            default:
        }
        return <div style={{backgroundColor: typeColor, borderRadius: '5px', padding: '5px'}}>{this.props.type}</div>;
    }
}

export default PokemonType;
