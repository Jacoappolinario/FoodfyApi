import { getRepository, Repository } from 'typeorm';

import { ICreateChefDTO } from '@modules/chefs/dtos/ICreateChefDTO';
import { IUpdateChefDTO } from '@modules/chefs/dtos/IUpdateChefDTO';
import { IChefsRepository } from '@modules/chefs/repositories/IChefsRepository';

import { Chef } from '../entities/Chef';

class ChefsRepository implements IChefsRepository {
  private repository: Repository<Chef>;

  constructor() {
    this.repository = getRepository(Chef);
  }

  async create({ name, avatar, id }: ICreateChefDTO): Promise<void> {
    const chef = this.repository.create({
      name,
      avatar,
      id,
    });

    await this.repository.save(chef);
  }

  async update(id: string, data: IUpdateChefDTO): Promise<Chef> {
    const chef = await this.findById(id);

    return this.repository.save({ ...chef, ...data });
  }

  async list(): Promise<Chef[]> {
    const chefs = await this.repository.find({
      relations: ['recipes'],
    });

    return chefs;
  }

  async findById(id: string): Promise<Chef> {
    const chef = this.repository.findOne(id);

    return chef;
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}

export { ChefsRepository };
