import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class alterRecipeAddUser1642614887517 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'recipes',
      new TableColumn({
        name: 'user_id',
        type: 'uuid',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('recipes', 'user_id');
  }
}
