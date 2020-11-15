import React from 'react';

function Recipe(props) {
    return (
        <div>
            <h1>Recipe for : {props.name}</h1>
            <h2>Ingredients needed: {props.ingredients}</h2>
            <h2>Recipe has {props.steps} steps and takes {props.time} minutes to complete</h2>
        </div>
    );
}

export default Recipe;