import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOphanages1602675773380 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "orphanages",
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
          name: "name",
          type: "varchar",
        },
        {
          name: "latitude",
          type: "decimal",
          scale: 7,
          precision: 9,
        },
        {
          name: "longitude",
          type: "decimal",
          scale: 7,
          precision: 9,
        },
        {
          name: "about",
          type: "text",
        },
        {
          name: "instructions",
          type: "text",
        },
        {
          name: "open_on_weekends",
          type: "boolean",
          default: false
        },
        {
          name: "opening_hours",
          type: "varchar",
        },
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('orphanages');
  }
}
