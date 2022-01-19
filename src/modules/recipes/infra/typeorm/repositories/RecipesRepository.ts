import { getRepository, Repository } from 'typeorm';

import { ICreateRecipeDTO } from '@modules/recipes/dtos/ICreateRecipeDTO';
import { IRecipesRepository } from '@modules/recipes/repositories/IRecipesRepository';

import { Recipe } from '../entities/Recipe';

class RecipesRepository implements IRecipesRepository {
  private repository: Repository<Recipe>;

  constructor() {
    this.repository = getRepository(Recipe);
  }

  async create({
    title,
    ingredients,
    preparation,
    information,
    chef_id,
    user_id,
  }: ICreateRecipeDTO): Promise<Recipe> {
    const recipe = this.repository.create({
      title,
      ingredients,
      preparation,
      information,
      chef_id,
      user_id,
    });

    await this.repository.save(recipe);

    return recipe;
  }

  async update(id: string, data: ICreateRecipeDTO): Promise<Recipe> {
    const recipe = await this.findById(id);

    return this.repository.save({ ...recipe, ...data });
  }

  async list(): Promise<Recipe[]> {
    const recipes = await this.repository.find({
      relations: ['chef'],
    });

    return recipes;
  }

  async findById(id: string): Promise<Recipe> {
    const recipe = await this.repository.findOne(id);

    return recipe;
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}

export { RecipesRepository };
