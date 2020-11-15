import React from 'react';
import logo from './logo.svg';
import './App.css';
import Recipe from './Recipe';
import Recipes from './Recipes';
import { resolveSoa } from 'dns';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='App'>
        <Recipes />
        <Recipe name="Pizza" ingredients='Flour, Yeast, Cheese, Tomato Sauce, Olive Oil, Water' steps='6' time='130' />
      </div>
    );
  }
}

export default App;
