import { inject, injectable } from 'tsyringe';

import { IChefsRepository } from '@modules/chefs/repositories/IChefsRepository';
import { AppError } from '@shared/errors/AppError';

@injectable()
class DeleteChefUseCase {
  constructor(
    @inject('ChefsRepository')
    private chefsRepository: IChefsRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const chefExists = await this.chefsRepository.findById(id);

    if (!chefExists) {
      throw new AppError('Chef not found!', 404);
    }

    await this.chefsRepository.delete(id);
  }
}

export { DeleteChefUseCase };
