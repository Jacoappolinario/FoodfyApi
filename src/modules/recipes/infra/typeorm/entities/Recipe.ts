import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

import { User } from '@modules/accounts/infra/typeorm/entities/User';
import { Chef } from '@modules/chefs/infra/typeorm/entities/Chef';

@Entity('recipes')
class Recipe {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column('varchar', { array: true })
  ingredients: string[];

  @Column('varchar', { array: true })
  preparation: string[];

  @Column()
  information: string;

  @ManyToOne(() => Chef)
  @JoinColumn({ name: 'chef_id' })
  chef: Chef;

  @Column()
  chef_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ select: false })
  user_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Recipe };
