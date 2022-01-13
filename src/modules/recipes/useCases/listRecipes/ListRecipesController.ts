import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListRecipesUseCase } from './ListRecipesUseCase';

class ListRecipesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listRecipesUseCase = container.resolve(ListRecipesUseCase);

    const all = await listRecipesUseCase.execute();

    return response.json(all);
  }
}

export { ListRecipesController };
