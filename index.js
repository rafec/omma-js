const prompt = require("prompt-sync")()

const companyName = "Omma Technologies";
const recipes = [];
let choice = 0;

function draw(section) {
    switch (section) {
        case "welcome":
            console.log(`\n| ----------* ${companyName} *---------- |\n`);
            console.log("| 1. Add a new recipe\n| 2. Update an existing recipe\n| 3. Search for a recipe\n| 4. Delete a recipe\n| 5. Exit Virtual Recipe Book");
            console.log(`\n| ---------* Virtual Recipe Book *--------- |\n`);

            console.log("What do you want to do today?\n ↓ Enter the number here");
            break;

        case "inserted":
            console.log("\n- - ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨ - -");
            console.log("| | Recipe inserted! You've successfully created a new recipe! | |");
            console.log("- - __________________________________________________________ - -\n");
            break;
    }
}



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
    draw("inserted");
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

    console.log("\nEnter the ID of the new recipe (integer number)\n↓ Enter the number here");
    id = Number(prompt(""));

    console.log("\nEnter the title of the new recipe\n ↓ Enter the title here");
    title = prompt(">");

    console.log("\nEnter the level of dificulty of the new recipe (Simple | Moderate | Complex)\n ↓ Enter the level here");
    level = Number(prompt(">"));

    do {
        console.log("\nEnter an ingredient of the new recipe\n ↓ Enter the ingredient here");
        let ingredient = prompt(">");
        ingredients.push(ingredient);
        another = prompt("Would you like to add another ingredient (y/n)?: ");
    } while (another == "y")

    do {
        console.log("\nEnter an instruction of the new recipe\n ↓ Enter the instruction here");
        let instruction = prompt(">");
        instructions.push(instruction);
        another = prompt("Would you like to add another instruction (y/n)?: ");
    } while (another == "y")

    console.log("\nEnter the link of the video of the new recipe\n ↓ Enter the link here")
    video = prompt(">");

    console.log("\nThis recipe is vegan? (y/n)\n ↓ Type here")
    vegan = prompt(">");
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
    draw("welcome");
    choice = Number(prompt(">"));

    switch (choice) {
        case 1:
            getCreateEntries();
            break;

        case 2:
            updateRecipe();
            break;

        case 3:
            readRecipe(getRecipeById());
            break;

        case 4:
            let idDelete = Number(prompt("Enter the id of the recipe that you want to delete: "));
            deleteRecipe(idDelete);
            break;

        case 5:
            console.log("\nExiting Virtual Recipe Book");
            break;

        default:
            console.log("Invalid option!");
            break;
    }

} while (choice != 5)
