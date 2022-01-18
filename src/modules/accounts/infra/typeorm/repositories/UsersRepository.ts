import { getRepository, Repository } from 'typeorm';

import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import { IUpdateUserDTO } from '@modules/accounts/dtos/IUpdateUserDTO';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';

import { User } from '../entities/User';

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({ name, email, password }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      password,
    });

    await this.repository.save(user);
  }

  async update(
    user_id: string,
    { name, email }: IUpdateUserDTO,
  ): Promise<User> {
    const user = await this.findById(user_id);

    const userUpdated = Object.assign(user, {
      name,
      email,
    });

    return this.repository.save(userUpdated);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({
      select: ['id', 'name', 'email', 'isAdmin', 'password'],
      where: { email },
    });

    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne(id);

    return user;
  }

  async list(): Promise<User[]> {
    const users = await this.repository.find();

    return users;
  }
}

export { UsersRepository };
