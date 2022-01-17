import { inject, injectable } from 'tsyringe';

import { IRecipesRepository } from '@modules/recipes/repositories/IRecipesRepository';
import { AppError } from '@shared/errors/AppError';

@injectable()
class DeleteRecipeUseCase {
  constructor(
    @inject('RecipesRepository')
    private recipesRepository: IRecipesRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const recipeExists = await this.recipesRepository.findById(id);

    if (!recipeExists) {
      throw new AppError('Recipe not found', 404);
    }

    await this.recipesRepository.delete(id);
  }
}

export { DeleteRecipeUseCase };
