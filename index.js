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

function showRecipes(){

}

// function deleteRecipe(){

// }