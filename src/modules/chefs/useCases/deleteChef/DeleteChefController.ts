import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteChefUseCase } from './DeleteChefUseCase';

class DeleteChefController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteChefUseCase = container.resolve(DeleteChefUseCase);

    await deleteChefUseCase.execute(id);

    return response.status(200).send();
  }
}

export { DeleteChefController };
