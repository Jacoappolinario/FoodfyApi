import { inject, injectable } from 'tsyringe';

import { IUpdateChefDTO } from '@modules/chefs/dtos/IUpdateChefDTO';
import { Chef } from '@modules/chefs/infra/typeorm/entities/Chef';
import { IChefsRepository } from '@modules/chefs/repositories/IChefsRepository';
import { AppError } from '@shared/errors/AppError';

@injectable()
class UpdateChefUseCase {
  constructor(
    @inject('ChefsRepository')
    private chefsRepository: IChefsRepository,
  ) {}

  async execute(id: string, { name }: IUpdateChefDTO): Promise<Chef> {
    const chefExists = await this.chefsRepository.findById(id);

    if (!chefExists) {
      throw new AppError('Chef not found!', 404);
    }

    const chef = await this.chefsRepository.update(id, { name });

    return chef;
  }
}

export { UpdateChefUseCase };
