import { getRepository, Not, Repository } from 'typeorm';

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

  async list(userSession: string): Promise<User[]> {
    const users = await this.repository.find({
      id: Not(userSession),
    });

    return users;
  }

  async showUserProfile(user_id: string): Promise<User> {
    const user = await this.repository.findOne({
      where: { id: user_id },
    });

    return user;
  }

  async turnAdmin(user_id: string): Promise<User> {
    const user = await this.findById(user_id);

    const userTurnAdmin = Object.assign(user, {
      isAdmin: true,
    });

    return this.repository.save(userTurnAdmin);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}

export { UsersRepository };
