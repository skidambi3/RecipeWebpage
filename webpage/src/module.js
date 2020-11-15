const express = require('express');
const app = express();
const recipes = [
  { id: 1, name: "Pizza", ingredients: 'Flour, Yeast, Cheese, Tomato Sauce, Olive Oil, Water', steps: 6, time: 120}
];

app.get('/', (req, res) => {
  res.send('Recipe Book Home Page');
});

app.get('/recipes', (req, res) => {
  res.send(recipes);
});

app.get('/recipes/:id', (req, res) => {
  const recipe = recipes.find(c => c.id === parseInt(req.params.id))
  if (!recipe) {
    return res.status(404).send('The course with the given id was not found')
  }
  res.send(recipe);
});

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening to port ${port}`));