import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateChefAvatarUseCase } from './UpdateChefAvatarUseCase';

class UpdateChefAvatarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const avatar_file = request.file.filename;

    const updateChefAvatarUseCase = container.resolve(UpdateChefAvatarUseCase);

    await updateChefAvatarUseCase.execute({ chef_id: id, avatar_file });

    return response.status(204).send();
  }
}

export { UpdateChefAvatarController };
