import { inject, injectable } from 'tsyringe';

import { IRecipesRepository } from '@modules/recipes/repositories/IRecipesRepository';

@injectable()
class DeleteRecipeUseCase {
  constructor(
    @inject('RecipesRepository')
    private recipesRepository: IRecipesRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const recipeExists = await this.recipesRepository.findById(id);

    if (!recipeExists) {
      throw new Error('Recipe not found');
    }

    await this.recipesRepository.delete(id);
  }
}

export { DeleteRecipeUseCase };
