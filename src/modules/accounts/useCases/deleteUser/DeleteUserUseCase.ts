import { inject, injectable } from 'tsyringe';

import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { AppError } from '@shared/errors/AppError';

interface IRequest {
  id: string;
  userSession: string;
}

@injectable()
class DeleteUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ id, userSession }: IRequest): Promise<void> {
    const userExists = await this.usersRepository.findById(id);

    if (!userExists) {
      throw new AppError('User not found!', 404);
    }

    if (userSession === id) {
      throw new AppError('Operation not permitted', 401);
    }

    await this.usersRepository.delete(id);
  }
}

export { DeleteUserUseCase };
