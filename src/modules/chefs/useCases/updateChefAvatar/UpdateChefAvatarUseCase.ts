import { inject, injectable } from 'tsyringe';

import { IChefsRepository } from '@modules/chefs/repositories/IChefsRepository';
import { deleteFile } from '@utils/file';

interface IRequest {
  chef_id: string;
  avatar_file: string;
}

@injectable()
class UpdateChefAvatarUseCase {
  constructor(
    @inject('ChefsRepository')
    private chefsRepository: IChefsRepository,
  ) {}

  async execute({ chef_id, avatar_file }: IRequest): Promise<void> {
    const chef = await this.chefsRepository.findById(chef_id);

    if (chef.avatar) {
      await deleteFile(`./tmp/avatar/${chef.avatar}`);
    }

    chef.avatar = avatar_file;

    await this.chefsRepository.create(chef);
  }
}

export { UpdateChefAvatarUseCase };
