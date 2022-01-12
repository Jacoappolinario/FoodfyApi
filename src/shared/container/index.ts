import { container } from 'tsyringe';

import { ChefsRepository } from '@modules/chefs/infra/typeorm/repositories/ChefsRepository';
import { IChefsRepository } from '@modules/chefs/repositories/IChefsRepository';

container.registerSingleton<IChefsRepository>(
  'ChefsRepository',
  ChefsRepository,
);
