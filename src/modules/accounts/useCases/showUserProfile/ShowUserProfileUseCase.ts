import { inject, injectable } from 'tsyringe';

import { User } from '@modules/accounts/infra/typeorm/entities/User';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { AppError } from '@shared/errors/AppError';

interface IRequest {
  user_id: string;
}

@injectable()
class ShowUserProfileUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ user_id }: IRequest): Promise<User> {
    const profile = await this.usersRepository.showUserProfile(user_id);

    if (!profile) {
      throw new AppError('profile not found!', 404);
    }

    return profile;
  }
}

export { ShowUserProfileUseCase };
