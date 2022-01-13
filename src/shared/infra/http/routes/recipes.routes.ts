import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload';
import { CreateRecipeController } from '@modules/recipes/useCases/createRecipe/CreateRecipeController';
import { DeleteRecipeController } from '@modules/recipes/useCases/deleteRecipe/DeleteRecipeController';
import { ListRecipesController } from '@modules/recipes/useCases/listRecipes/ListRecipesController';
import { UpdateRecipeController } from '@modules/recipes/useCases/updateRecipe/UpdateRecipeController';
import { UploadRecipeImagesController } from '@modules/recipes/useCases/uploadRecipeImages/UploadRecipeImagesController';

const recipesRoutes = Router();

const upload = multer(uploadConfig.upload('./tmp/recipes'));

const createRecipeController = new CreateRecipeController();
const listRecipesController = new ListRecipesController();
const updateRecipeController = new UpdateRecipeController();
const deleteRecipeController = new DeleteRecipeController();
const uploadRecipeImagesController = new UploadRecipeImagesController();

recipesRoutes.post('/', createRecipeController.handle);

recipesRoutes.get('/', listRecipesController.handle);

recipesRoutes.put('/:id', updateRecipeController.handle);

recipesRoutes.delete('/:id', deleteRecipeController.handle);

recipesRoutes.post(
  '/images/:id',
  upload.array('images'),
  uploadRecipeImagesController.handle,
);

export { recipesRoutes };
