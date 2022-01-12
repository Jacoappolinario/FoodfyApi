import { inject, injectable } from 'tsyringe';

import { IChefsRepository } from '@modules/chefs/repositories/IChefsRepository';

@injectable()
class DeleteChefUseCase {
  constructor(
    @inject('ChefsRepository')
    private chefsRepository: IChefsRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const chefExists = await this.chefsRepository.findById(id);

    if (!chefExists) {
      throw new Error('Chef not found!');
    }

    await this.chefsRepository.delete(id);
  }
}

export { DeleteChefUseCase };
