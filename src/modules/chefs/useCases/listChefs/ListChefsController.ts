import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListChefsUseCase } from './ListChefsUseCase';

class ListChefsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listChefsUseCase = container.resolve(ListChefsUseCase);

    const all = await listChefsUseCase.execute();

    return response.json(all);
  }
}

export { ListChefsController };
