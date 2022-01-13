import { ICreateRecipeDTO } from '../dtos/ICreateRecipeDTO';
import { IUpdateRecipeDTO } from '../dtos/IUpdateRecipeDTO';
import { Recipe } from '../infra/typeorm/entities/Recipe';

interface IRecipesRepository {
  create(data: ICreateRecipeDTO): Promise<Recipe>;
  list(): Promise<Recipe[]>;
  update(id: string, data: IUpdateRecipeDTO): Promise<Recipe>;
  findById(id: string): Promise<Recipe>;
  delete(id: string): Promise<void>;
}

export { IRecipesRepository };
