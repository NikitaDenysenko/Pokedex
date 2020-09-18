import React , {Fragment} from 'react';
import './App.css';
import PokemonCardContainer from '../src/components/PokemonCardContainer/PokemonCardContainer';
// import InfoCardContainer from '../src/components/InfoCardContainer/InfoCardContainer'
//import PokemonCard from '../src/components/PokemonCard/PokemonCard';

function App() {
    return (
        <Fragment>
            <h1>Pokedex</h1>
            <PokemonCardContainer />
        </Fragment>
    );
}

export default App;
