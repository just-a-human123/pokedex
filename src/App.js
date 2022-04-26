import './App.css';
import Pokedex from './components/pokedex';

function App() {
  return (
    <div className="App">
      <Pokedex
        id='5'
        name='charmander'
        type='fire'
        exp='100'
      />
    </div>
  );
}

export default App;
