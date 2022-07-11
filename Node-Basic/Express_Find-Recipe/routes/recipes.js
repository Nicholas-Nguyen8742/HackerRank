var recipes = require('../recipes.json');
var router = require('express').Router();
const fs = require("fs");


function readRecipes() {
    const recipesData = fs.readFileSync("./recipes.json");
    const parsedRecipesData = JSON.parse(recipesData);
    return parsedRecipesData;
}

router.get('/:id', function(req, res) {
    const recipesContent = readRecipes();
    const urlID = req.params.id

    const selectedRecipe = recipesContent.find((recipe) => recipe.id === urlID);

    res.status(200).json(selectedRecipe);

});

module.exports = router;

