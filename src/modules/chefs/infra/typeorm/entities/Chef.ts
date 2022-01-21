import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

import { Recipe } from '@modules/recipes/infra/typeorm/entities/Recipe';

@Entity('chefs')
class Chef {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  avatar: string;

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;

  @OneToMany(() => Recipe, recipe => recipe.chef)
  recipes: Recipe[];

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Chef };
