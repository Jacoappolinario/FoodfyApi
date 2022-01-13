import { inject, injectable } from 'tsyringe';

import { ICreateRecipeDTO } from '@modules/recipes/dtos/ICreateRecipeDTO';
import { Recipe } from '@modules/recipes/infra/typeorm/entities/Recipe';
import { IRecipesRepository } from '@modules/recipes/repositories/IRecipesRepository';

@injectable()
class UpdateRecipeUseCase {
  constructor(
    @inject('RecipesRepository')
    private recipesRepository: IRecipesRepository,
  ) {}

  async execute(
    id: string,
    { title, ingredients, preparation, information, chef_id }: ICreateRecipeDTO,
  ): Promise<Recipe> {
    const recipeExists = await this.recipesRepository.findById(id);

    if (!recipeExists) {
      throw new Error('Recipe not found!');
    }

    const recipe = await this.recipesRepository.update(id, {
      title,
      ingredients,
      preparation,
      information,
      chef_id,
    });

    return recipe;
  }
}

export { UpdateRecipeUseCase };
