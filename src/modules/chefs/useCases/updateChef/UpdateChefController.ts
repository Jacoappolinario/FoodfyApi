import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateChefUseCase } from './UpdateChefUseCase';

class UpdateChefController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name } = request.body;

    const updateChefUseCase = container.resolve(UpdateChefUseCase);

    const chef = await updateChefUseCase.execute(id, { name });

    return response.status(200).json(chef);
  }
}

export { UpdateChefController };
