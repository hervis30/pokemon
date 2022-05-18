import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import Pokemon from './components/Pokemon';

function App() {

  const [pikachu, setPikachu] = useState([]);


  return (
    <div className="App">
      <header className="App-header">
        <Header />

        <Pokemon
          pikachu={pikachu}
          setPikachu={setPikachu}
        />


      </header>
    </div>
  )
}

export default App
