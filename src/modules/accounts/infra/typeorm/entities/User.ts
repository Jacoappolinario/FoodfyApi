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

@Entity('users')
class User {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({ select: false })
  password: string;

  @Column()
  isAdmin: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // @OneToMany(() => Recipe, recipe => recipe.user)
  // recipes: Recipe[];

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { User };
