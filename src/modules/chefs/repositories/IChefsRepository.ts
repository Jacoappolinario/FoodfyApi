import { ICreateChefDTO } from '../dtos/ICreateChefDTO';
import { IUpdateChefDTO } from '../dtos/IUpdateChefDTO';
import { Chef } from '../infra/typeorm/entities/Chef';

interface IChefsRepository {
  create(data: ICreateChefDTO): Promise<void>;
  list(): Promise<Chef[]>;
  update(id: string, data: IUpdateChefDTO): Promise<Chef>;
  findById(id: string): Promise<Chef>;
  delete(id: string): Promise<void>;
}

export { IChefsRepository };
