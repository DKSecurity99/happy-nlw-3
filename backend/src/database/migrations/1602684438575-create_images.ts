import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1602684438575 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "images",
      columns: [
        {
          name: "id",
          type: "int",
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: "increment"
        },
        {
          name: "path",
          type: "varchar"
        },
        {
          name: "orphanage_id",
          type: "int"
        }
      ],

      foreignKeys: [
        {
          name: "imageOrphanage",
          columnNames: ['orphanage_id'],
          referencedTableName: 'orphanages',
          referencedColumnNames: ['id'],
          onUpdate: "CASCADE",
          onDelete: "CASCADE"
        }
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('images');
  }
}
