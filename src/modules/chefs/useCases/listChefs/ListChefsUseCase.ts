import { inject, injectable } from 'tsyringe';

import { Chef } from '@modules/chefs/infra/typeorm/entities/Chef';
import { IChefsRepository } from '@modules/chefs/repositories/IChefsRepository';

@injectable()
class ListChefsUseCase {
  constructor(
    @inject('ChefsRepository')
    private chefsRepository: IChefsRepository,
  ) {}

  async execute(): Promise<Chef[]> {
    const chefs = await this.chefsRepository.list();

    return chefs;
  }
}

export { ListChefsUseCase };
