import { inject, injectable } from 'tsyringe';

import { ICreateRecipeDTO } from '@modules/recipes/dtos/ICreateRecipeDTO';
import { Recipe } from '@modules/recipes/infra/typeorm/entities/Recipe';
import { IRecipesRepository } from '@modules/recipes/repositories/IRecipesRepository';

@injectable()
class CreateRecipeUseCase {
  constructor(
    @inject('RecipesRepository')
    private recipesRepository: IRecipesRepository,
  ) {}

  async execute({
    title,
    ingredients,
    preparation,
    information,
    chef_id,
    user_id,
  }: ICreateRecipeDTO): Promise<Recipe> {
    const recipe = await this.recipesRepository.create({
      title,
      ingredients,
      preparation,
      information,
      chef_id,
      user_id,
    });

    return recipe;
  }
}

export { CreateRecipeUseCase };
