import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class itens1675449846638 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "itens",
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },

          {
            name: "id_pedido",
            type: "string",
          },

          {
            name: "id_item",
            type: "string",
          },

          {
            name: "quantidade",
            type: "string",
          },

          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },

          {
            name: "update_at",
            type: "timestamp",
            default: "now()",
          },
        ],

        foreignKeys: [
          {
            name: "id_pedido",
            referencedTableName: "pedidos",
            referencedColumnNames: ["id"],
            columnNames: ["id_pedido"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("itens");
  }
}
