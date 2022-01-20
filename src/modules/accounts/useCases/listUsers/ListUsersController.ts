import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListUsersUseCase } from './ListUsersUseCase';

class ListUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const userSession = request.user.id;

    const listUsersUseCase = container.resolve(ListUsersUseCase);

    const all = await listUsersUseCase.execute({ userSession });

    return response.json(all);
  }
}

export { ListUsersController };
