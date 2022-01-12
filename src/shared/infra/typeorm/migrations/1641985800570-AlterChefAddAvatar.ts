import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AlterChefAddAvatar1641985800570 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'chefs',
      new TableColumn({
        name: 'avatar',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('chefs', 'avatar');
  }
}
