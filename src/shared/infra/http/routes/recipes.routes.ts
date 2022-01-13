import { Router } from 'express';

import { CreateRecipeController } from '@modules/recipes/useCases/createRecipe/CreateRecipeController';
import { DeleteRecipeController } from '@modules/recipes/useCases/deleteRecipe/DeleteRecipeController';
import { ListRecipesController } from '@modules/recipes/useCases/listRecipes/ListRecipesController';
import { UpdateRecipeController } from '@modules/recipes/useCases/updateRecipe/UpdateRecipeController';

const recipesRoutes = Router();

const createRecipeController = new CreateRecipeController();
const listRecipesController = new ListRecipesController();
const updateRecipeController = new UpdateRecipeController();
const deleteRecipeController = new DeleteRecipeController();

recipesRoutes.post('/', createRecipeController.handle);

recipesRoutes.get('/', listRecipesController.handle);

recipesRoutes.put('/:id', updateRecipeController.handle);

recipesRoutes.delete('/:id', deleteRecipeController.handle);

export { recipesRoutes };
