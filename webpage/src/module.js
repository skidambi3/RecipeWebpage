const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());

const recipes = {
  "data": [{ name: "Pizza", ingredients: 'Flour, Yeast, Cheese, Tomato Sauce, Olive Oil, Water', steps: 6, time: 120},
  { name: "Pasta", ingredients: 'Flour, Cheese, Tomato Sauce, Olive Oil, Water', steps: 4, time: 65},
  { name: "Muffins", ingredients: 'Flour, Cheese, Tomato Sauce', steps: 5, time: 80},
  { name: "Bread", ingredients: 'Flour, Yeast', steps: 3, time: 30},
  { name: "Jam", ingredients: 'Flour Olive Oil, Water', steps: 5, time: 90},
  { name: "Biscuits", ingredients: 'Tomato Sauce, Olive Oil, Water', steps: 6, time: 100},
  { name: "Deep Dish Pizza", ingredients: 'Flour, Yeast, Cheese, Tomato Sauce', steps: 8, time: 180},
  { name: "Ravioli", ingredients: 'Flour, Yeast, Cheese, Olive Oil, Water', steps: 4, time: 40},
  { name: "Sandwich", ingredients: 'Flour, Yeast, Cheese', steps: 4, time: 50}]
};

app.get('/', (req, res) => {
  res.send('Recipe Book Home Page');
});

app.get('/recipes', (req, res) => {
  res.send(recipes);
});

// app.get('/recipes/:id', (req, res) => {
//   const recipe = recipes.find(c => c.id === parseInt(req.params.id))
//   if (!recipe) {
//     return res.status(404).send('The course with the given id was not found')
//   }
//   res.send(recipe);
// });

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening to port ${port}`));