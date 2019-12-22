import React from 'react';
import './App.css';
import MenuSuperior from './components/menuSuperior/menuSuperior';
import Resumo from './components/resumo/resumo';
import Consultas from './components/Consultas/Consultas'
import Faturamento from './components/Faturamento/Faturamento'

function App() {
  return (
    <div className="App">
      <MenuSuperior/>
      <Resumo/>
      <Consultas/>
      <Faturamento/>
    </div>
  );
}

export default App;
