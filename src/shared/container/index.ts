import { container } from 'tsyringe';

import { ChefsRepository } from '@modules/chefs/infra/typeorm/repositories/ChefsRepository';
import { IChefsRepository } from '@modules/chefs/repositories/IChefsRepository';
import { RecipesRepository } from '@modules/recipes/infra/typeorm/repositories/RecipesRepository';
import { IRecipesRepository } from '@modules/recipes/repositories/IRecipesRepository';

container.registerSingleton<IChefsRepository>(
  'ChefsRepository',
  ChefsRepository,
);

container.registerSingleton<IRecipesRepository>(
  'RecipesRepository',
  RecipesRepository,
);
