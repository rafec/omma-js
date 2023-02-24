const companyName = "Omma Technologies";
const recipes = [];

console.log(companyName);

function createRecipe(id, title, level, ingredients, instructions, video, vegan) {
    const newRecipe = {
        id: id,
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

function readRecipes(recipes) {
    let recipeProperties = recipes.map(recipe => {
        let properties = {
            title: recipe.title,
            ingredients: recipe.ingredients,
            vegan: recipe.vegan
        }

        return properties;
    })
    console.log(recipeProperties);
}

// function updateRecipe(){

// }

function deleteRecipe(id) {
    const recipeExists = recipes.some(recipe => recipe.id == id);
    if (recipeExists) {
        const newList = recipes.filter(recipe => recipe.id != id);
        console.log(newList);
    } else {
        console.log("This recipe doesn't exists!");
    }
}

createRecipe(1, "Arroz", "Simples", ["1 colher (sopa) de óleo", "1/2 cebola pequena picada", "1 dente de alho pequeno picado", "1 e meia xícara (chá) de arroz", "3 xícaras (chá) de água fervente"], ["Em uma panela, aqueça o óleo e refogue a cebola e o alho até que estejam transparentes", "Junte o arroz e refogue bem até ficar brilhante", "Adicione a água fervente e misture bem.", "Abaixe o fogo, tampe parcialmente a panela e deixe cozinhar até o arroz secar", "Desligue o fogo, tampe a panela por mais 5 minutos para que o arroz termine o cozimento em seu próprio vapor"], "https://youtu.be/gRTWL39lUtQ", true);
createRecipe(2, "Arroz", "Simples", ["1 colher (sopa) de óleo", "1/2 cebola pequena picada", "1 dente de alho pequeno picado", "1 e meia xícara (chá) de arroz", "3 xícaras (chá) de água fervente"], ["Em uma panela, aqueça o óleo e refogue a cebola e o alho até que estejam transparentes", "Junte o arroz e refogue bem até ficar brilhante", "Adicione a água fervente e misture bem.", "Abaixe o fogo, tampe parcialmente a panela e deixe cozinhar até o arroz secar", "Desligue o fogo, tampe a panela por mais 5 minutos para que o arroz termine o cozimento em seu próprio vapor"], "https://youtu.be/gRTWL39lUtQ", true);
// readRecipes(recipes);
deleteRecipe(1);