import { inject, injectable } from 'tsyringe';

import { Recipe } from '@modules/recipes/infra/typeorm/entities/Recipe';
import { IRecipesRepository } from '@modules/recipes/repositories/IRecipesRepository';

@injectable()
class ListRecipesUseCase {
  constructor(
    @inject('RecipesRepository')
    private recipesRepository: IRecipesRepository,
  ) {}

  async execute(): Promise<Recipe[]> {
    const recipes = await this.recipesRepository.list();

    return recipes;
  }
}

export { ListRecipesUseCase };
