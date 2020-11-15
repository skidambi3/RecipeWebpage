import React from 'react';
import Recipe from './Recipe';

class Recipes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {recipes: [
            { name: "Pizza", ingredients: 'Flour, Yeast, Cheese, Tomato Sauce, Olive Oil, Water', steps: 6, time: 120}
        ]};
        // fetch('')
        // .then(res => console.log(res))
        // // .then(data => console.log(data))
        // // .catch(error => console.log(error))
    };

    render() {
        let mappedRecipies = this.state.recipes.map(r => <Recipe name={r.name} ingredients={r.ingredients} steps={r.steps} time={r.time} key='1'/>)
        return (
            <div>
                {mappedRecipies}
            </div>
        );
    }
}
export default Recipes;