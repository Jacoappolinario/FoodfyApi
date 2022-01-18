import { ICreateUserDTO } from './ICreateUserDTO';

type IUpdateUserDTO = Pick<ICreateUserDTO, 'name' | 'email'>;

export { IUpdateUserDTO };
