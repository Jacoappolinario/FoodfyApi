import { RecipeImage } from '../infra/typeorm/entities/RecipeImage';

interface IRecipesImagesRepository {
  create(recipe_id: string, image_name: string): Promise<RecipeImage>;
}

export { IRecipesImagesRepository };
