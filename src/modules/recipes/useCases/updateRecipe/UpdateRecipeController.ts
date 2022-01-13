import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateRecipeUseCase } from './UpdateRecipeUseCase';

class UpdateRecipeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { title, ingredients, preparation, information, chef_id } =
      request.body;

    const updateRecipeUseCase = container.resolve(UpdateRecipeUseCase);

    const recipe = await updateRecipeUseCase.execute(id, {
      title,
      ingredients,
      preparation,
      information,
      chef_id,
    });

    return response.status(200).json(recipe);
  }
}

export { UpdateRecipeController };
