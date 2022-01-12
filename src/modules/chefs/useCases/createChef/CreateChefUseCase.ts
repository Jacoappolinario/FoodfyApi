import { inject, injectable } from 'tsyringe';

import { ICreateChefDTO } from '@modules/chefs/dtos/ICreateChefDTO';
import { IChefsRepository } from '@modules/chefs/repositories/IChefsRepository';

@injectable()
class CreateChefUseCase {
  constructor(
    @inject('ChefsRepository')
    private chefsRepository: IChefsRepository,
  ) {}

  async execute({ name }: ICreateChefDTO): Promise<void> {
    await this.chefsRepository.create({
      name,
    });
  }
}

export { CreateChefUseCase };
