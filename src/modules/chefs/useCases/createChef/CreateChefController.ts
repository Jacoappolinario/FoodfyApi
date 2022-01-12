import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateChefUseCase } from './CreateChefUseCase';

class CreateChefController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const createChefUseCase = container.resolve(CreateChefUseCase);

    await createChefUseCase.execute({ name });

    return response.status(201).send();
  }
}

export { CreateChefController };
