import { hash } from 'bcrypt';
import crypto from 'crypto';
import { inject, injectable } from 'tsyringe';

import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ name, email }: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error('User already exists!');
    }

    // Gera senha para o novo usuário
    const generatedPassword = await crypto.randomBytes(8).toString('hex');

    // Criptografa senha gerada
    const passwordHash = await hash(generatedPassword, 8);

    await this.usersRepository.create({
      name,
      email,
      password: passwordHash,
    });

    // TODO: Implementar envio de email com senha
  }
}

export { CreateUserUseCase };
