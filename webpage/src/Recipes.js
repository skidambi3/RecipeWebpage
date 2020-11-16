import React from 'react';
import Recipe from './Recipe';

class Recipes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {recipes: [
            { name: "Pizza", ingredients: 'Flour, Yeast, Cheese, Tomato Sauce, Olive Oil, Water', steps: 6, time: 120},
            { name: "Pasta", ingredients: 'Flour, Cheese, Tomato Sauce, Olive Oil, Water', steps: 4, time: 65},
            { name: "Muffins", ingredients: 'Flour, Cheese, Tomato Sauce', steps: 5, time: 80},
            { name: "Bread", ingredients: 'Flour, Yeast', steps: 3, time: 30},
            { name: "Jam", ingredients: 'Flour Olive Oil, Water', steps: 5, time: 90},
            { name: "Biscuits", ingredients: 'Tomato Sauce, Olive Oil, Water', steps: 6, time: 100},
            { name: "Deep Dish Pizza", ingredients: 'Flour, Yeast, Cheese, Tomato Sauce', steps: 8, time: 180},
            { name: "Ravioli", ingredients: 'Flour, Yeast, Cheese, Olive Oil, Water', steps: 4, time: 40},
            { name: "Sandwich", ingredients: 'Flour, Yeast, Cheese', steps: 4, time: 50},
            { name: "Calzone", ingredients: 'Flour, Yeast, Cheese, Tomato Sauce, Vegetables of Choice', steps: 6, time: 110}
        ]};
        fetch('http://localhost:5000/recipes')
        .then(res => res.json())
        .then(res => console.log(res))
        .then(data => this.state.recipes.push(data))
        .catch(error => console.log(error))
    };

    render() {
        console.log(this.state.recipes)
        // return <div><h1>Hello</h1></div>;
        let mappedRecipies = this.state.recipes.map(r => <Recipe name={r.name} ingredients={r.ingredients} steps={r.steps} time={r.time}/>)
        return (
            <div>
                {mappedRecipies}
            </div>
        );
    }
}
export default Recipes;