import { container } from 'tsyringe';

import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { ChefsRepository } from '@modules/chefs/infra/typeorm/repositories/ChefsRepository';
import { IChefsRepository } from '@modules/chefs/repositories/IChefsRepository';
import { RecipesImagesRepository } from '@modules/recipes/infra/typeorm/repositories/RecipesImagesRepository';
import { RecipesRepository } from '@modules/recipes/infra/typeorm/repositories/RecipesRepository';
import { IRecipesImagesRepository } from '@modules/recipes/repositories/IRecipesImagesRepository';
import { IRecipesRepository } from '@modules/recipes/repositories/IRecipesRepository';

container.registerSingleton<IChefsRepository>(
  'ChefsRepository',
  ChefsRepository,
);

container.registerSingleton<IRecipesRepository>(
  'RecipesRepository',
  RecipesRepository,
);

container.registerSingleton<IRecipesImagesRepository>(
  'RecipesImagesRepository',
  RecipesImagesRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
