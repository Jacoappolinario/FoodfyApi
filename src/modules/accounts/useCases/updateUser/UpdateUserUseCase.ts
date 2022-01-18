import { inject, injectable } from 'tsyringe';

import { IUpdateUserDTO } from '@modules/accounts/dtos/IUpdateUserDTO';
import { User } from '@modules/accounts/infra/typeorm/entities/User';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { AppError } from '@shared/errors/AppError';

@injectable()
class UpdateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute(
    user_id: string,
    { name, email }: IUpdateUserDTO,
  ): Promise<User> {
    const userExists = await this.usersRepository.findById(user_id);

    if (!userExists) {
      throw new AppError('User not found!', 404);
    }

    const user = await this.usersRepository.update(user_id, { name, email });

    return user;
  }
}

export { UpdateUserUseCase };
