import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { TurnUserAdminUseCase } from './TurnUserAdminUseCase';

class TurnUserAdminController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const turnUserAdminUseCase = container.resolve(TurnUserAdminUseCase);

    const userTurnAdmin = await turnUserAdminUseCase.execute({ user_id: id });

    return response.json(userTurnAdmin);
  }
}

export { TurnUserAdminController };
