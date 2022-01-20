import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ShowUserProfileUseCase } from './ShowUserProfileUseCase';

class ShowUserProfileController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const showUserProfileUseCase = container.resolve(ShowUserProfileUseCase);

    const userProfile = await showUserProfileUseCase.execute({ user_id: id });

    return response.json(userProfile);
  }
}

export { ShowUserProfileController };
