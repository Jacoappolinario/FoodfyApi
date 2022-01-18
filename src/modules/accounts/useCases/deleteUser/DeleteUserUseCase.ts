import { inject, injectable } from 'tsyringe';

import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { AppError } from '@shared/errors/AppError';

@injectable()
class DeleteUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const userExists = await this.usersRepository.findById(id);

    if (!userExists) {
      throw new AppError('User not found!', 404);
    }

    await this.usersRepository.delete(id);
  }
}

export { DeleteUserUseCase };
