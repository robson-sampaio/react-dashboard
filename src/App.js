import React from 'react';
import './App.css';
import MenuSuperior from './components/menuSuperior/menuSuperior';
import Resumo from './components/resumo/resumo';

function App() {
  return (
    <div className="App">
      <MenuSuperior/>
      <Resumo/>
    </div>
  );
}

export default App;
