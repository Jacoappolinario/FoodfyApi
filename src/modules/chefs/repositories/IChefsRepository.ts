import { ICreateChefDTO } from '../dtos/ICreateChefDTO';
import { Chef } from '../infra/typeorm/entities/Chef';

interface IChefsRepository {
  create(data: ICreateChefDTO): Promise<void>;
  findById(id: string): Promise<Chef>;
  list(): Promise<Chef[]>;
  update(id: string, data: ICreateChefDTO): Promise<Chef>;
  delete(id: string): Promise<void>;
}

export { IChefsRepository };
