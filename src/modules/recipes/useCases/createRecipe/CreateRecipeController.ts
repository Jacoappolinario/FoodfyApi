import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateRecipeUseCase } from './CreateRecipeUseCase';

class CreateRecipeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const { title, ingredients, preparation, information, chef_id } =
      request.body;

    const createRecipeUseCase = container.resolve(CreateRecipeUseCase);

    const recipe = await createRecipeUseCase.execute({
      title,
      ingredients,
      preparation,
      information,
      chef_id,
      user_id: id,
    });

    return response.status(201).json(recipe);
  }
}

export { CreateRecipeController };
