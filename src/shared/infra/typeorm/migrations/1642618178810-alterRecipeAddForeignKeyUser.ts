import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class alterRecipeAddForeignKeyUser1642618178810
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'recipes',
      new TableForeignKey({
        name: 'FKUserRecipe',
        referencedTableName: 'users',
        referencedColumnNames: ['id'],
        columnNames: ['user_id'],
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('recipes', 'FKUserRecipe');
  }
}
