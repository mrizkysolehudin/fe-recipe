import { combineReducers } from "redux";
import { editRecipeReducer, fetchRecipeDetailsReducer } from "./recipe";

const rootReducer = combineReducers({
	recipeDetails: fetchRecipeDetailsReducer,
	editRecipe: editRecipeReducer,
});

export default rootReducer;
