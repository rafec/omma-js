const prompt = require("prompt-sync")()

const companyName = "Omma Technologies";
const recipes = [];
let choice = 0;


//CREATE
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

function getCreateEntries() {
    let booleanValidator = false;
    let id;
    let title;
    let level;
    let ingredients = [];
    let instructions = [];
    let video;
    let vegan;

    id = Number(prompt("Enter the ID of the new recipe (integer number): "));

    title = prompt("Enter the title of the new recipe: ");

    level = Number(prompt("Enter the level of dificulty of the new recipe (1 - Simple | 2 - Moderate | 3 - Complex): "));

    do {
        let ingredient = prompt("Enter an ingredient of the new recipe: ");
        ingredients.push(ingredient);
        another = prompt("Would you like to add another ingredient (y/n)?: ");
    } while (another == "y")

    do {
        let instruction = prompt("Enter an instruction to prepare the new recipe: ");
        instructions.push(instruction);
        another = prompt("Would you like to add another instruction (y/n)?: ");
    } while (another == "y")

    video = prompt("Enter the link of the video of the new recipe: ");

    vegan = prompt("This recipe is vegan? (yes | no): ");
    do {
        if (vegan == "yes" || vegan == "Yes" || vegan == "y") {
            vegan = true;
            booleanValidator = true;
        } else if (vegan == "no" || vegan == "No" || vegan == "n") {
            vegan = false;
            booleanValidator = true;
        } else {
            vegan = prompt("Please, insert a valid value: ");
        }
    } while (!booleanValidator)


    createRecipe(id, title, level, ingredients, instructions, video, vegan);
}

//READ
function readRecipe(recipes) {
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

function getRecipeById() {
    let idSearch = Number(prompt("Enter the id of the recipe that you want to search: "));
    let searchedRecipe = recipes.filter(recipe => recipe.id == idSearch);

    return searchedRecipe;
}

//UPDATE
function updateRecipe() {

}

//DELETE
function deleteRecipe(id) {
    const recipeExists = recipes.some(recipe => recipe.id == id);
    if (recipeExists) {
        const newList = recipes.filter(recipe => recipe.id != id);
        console.log(newList);
    } else {
        console.log("This recipe doesn't exists!");
    }
}

do {
    console.log(`\n| ----------* ${companyName} *---------- |\n`);
    console.log("| 1. Add a new recipe\n| 2. Update an existing recipe\n| 3. Search for a recipe\n| 4. Delete a recipe\n| 5. Exit Virtual Recipe Book");
    console.log(`\n| ---------* Virtual Recipe Book *--------- |\n`);

    console.log("What do you want to do today?\n↓Enter the number here");
    choice = Number(prompt(""));

    switch (choice) {
        case 1:
            getCreateEntries();
            break;

        case 2:
            updateRecipe();

        case 3:
            readRecipe(getRecipeById());
            break;

        case 4:
            let idDelete = Number(prompt("Enter the id of the recipe that you want to delete: "));
            deleteRecipe(idDelete);
            break;

        default:
            console.log("Invalid option!");
    }

} while (choice != 5)

// createRecipe(1, "Arroz", "Simples", ["1 colher (sopa) de óleo", "1/2 cebola pequena picada", "1 dente de alho pequeno picado", "1 e meia xícara (chá) de arroz", "3 xícaras (chá) de água fervente"], ["Em uma panela, aqueça o óleo e refogue a cebola e o alho até que estejam transparentes", "Junte o arroz e refogue bem até ficar brilhante", "Adicione a água fervente e misture bem.", "Abaixe o fogo, tampe parcialmente a panela e deixe cozinhar até o arroz secar", "Desligue o fogo, tampe a panela por mais 5 minutos para que o arroz termine o cozimento em seu próprio vapor"], "https://youtu.be/gRTWL39lUtQ", true);
