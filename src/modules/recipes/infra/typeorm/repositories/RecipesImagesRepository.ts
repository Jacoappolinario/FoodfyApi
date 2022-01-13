import { getRepository, Repository } from 'typeorm';

import { IRecipesImagesRepository } from '@modules/recipes/repositories/IRecipesImagesRepository';

import { RecipeImage } from '../entities/RecipeImage';

class RecipesImagesRepository implements IRecipesImagesRepository {
  private repository: Repository<RecipeImage>;

  constructor() {
    this.repository = getRepository(RecipeImage);
  }

  async create(recipe_id: string, image_name: string): Promise<RecipeImage> {
    const recipeImage = this.repository.create({
      recipe_id,
      image_name,
    });

    await this.repository.save(recipeImage);

    return recipeImage;
  }
}

export { RecipesImagesRepository };
