import { inject, injectable } from 'tsyringe';

import { User } from '@modules/accounts/infra/typeorm/entities/User';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';

interface IRequest {
  userSession: string;
}
@injectable()
class ListUsersUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ userSession }: IRequest): Promise<User[]> {
    const users = await this.usersRepository.list(userSession);

    return users;
  }
}

export { ListUsersUseCase };
