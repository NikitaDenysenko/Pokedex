import React , {Fragment} from 'react';
import './App.css';
import PokemonCardContainer from '../src/components/PokemonCardContainer/PokemonCardContainer';
// import InfoCard from '../src/components/InfoCard/InfoCard'
// import PokemonCard from '../src/components/PokemonCard/PokemonCard';
// import PokemonType from '../src/components/PokemonType/PokemonType';


function App() {
    return (
        <Fragment>
            <h1 style={{textAlign: 'center'}}>Pokedex</h1>
            <PokemonCardContainer />
        </Fragment>
    );
}

export default App;
