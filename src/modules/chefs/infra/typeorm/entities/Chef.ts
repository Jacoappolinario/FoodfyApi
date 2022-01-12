import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

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

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Chef };
