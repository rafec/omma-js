const companyName = "Omma Technologies";
const recipes = [];

console.log(companyName);

function createRecipe(title, level, ingredients, instructions, video, vegan) {
    const newRecipe = {
        id: Date.now().toString(),
        title: title,
        level: level,
        ingredients: ingredients,
        instructions: instructions,
        video: video,
        vegan: vegan
    }

    recipes.push(newRecipe);
    console.log("Recipe inserted! You've successfully created a new recipe!");
}

function readRecipes(recipes){
    let recipeProperties = recipes.map(recipe => {
        let properties = {
            title: recipe.title,
            ingredients: recipe.ingredients,
            vegan: recipe.vegan
        }

        return properties;
    })
}

// function updateRecipe(){

// }

function deleteRecipe(id){
    const recipeExists = recipes.some(recipe => recipe.id == id);
    if (recipeExists){
        const newList = recipes.filter(recipe => recipe.id != id);
        console.log(newList);
    } else {
        console.log("This recipe doesn't exists!");
    }
}