import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { IUpdateUserDTO } from '../dtos/IUpdateUserDTO';
import { User } from '../infra/typeorm/entities/User';

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  update(user_id: string, { name, email }: IUpdateUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
  list(userSession: string): Promise<User[]>;
  delete(id: string): Promise<void>;
  turnAdmin(user_id: string): Promise<User>;
  showUserProfile(user_id: string): Promise<User>;
}

export { IUsersRepository };
