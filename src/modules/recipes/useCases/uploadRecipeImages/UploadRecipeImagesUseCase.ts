import { inject, injectable } from 'tsyringe';

import { IRecipesImagesRepository } from '@modules/recipes/repositories/IRecipesImagesRepository';

interface IRequest {
  recipe_id: string;
  images_name: string[];
}

@injectable()
class UploadRecipeImagesUseCase {
  constructor(
    @inject('RecipesImagesRepository')
    private recipesImagesRepository: IRecipesImagesRepository,
  ) {}

  async execute({ recipe_id, images_name }: IRequest): Promise<void> {
    images_name.map(async image => {
      await this.recipesImagesRepository.create(recipe_id, image);
    });
  }
}

export { UploadRecipeImagesUseCase };
