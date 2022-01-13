import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateRecipes1641996839332 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'recipes',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'title',
            type: 'varchar',
          },
          {
            name: 'ingredients',
            type: 'varchar',
            isArray: true,
          },
          {
            name: 'preparation',
            type: 'varchar',
            isArray: true,
          },
          {
            name: 'information',
            type: 'varchar',
          },
          {
            name: 'chef_id',
            type: 'uuid',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'FkChefRecipe',
            referencedTableName: 'chefs',
            referencedColumnNames: ['id'],
            columnNames: ['chef_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('recipes');
  }
}
