import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class itens1675449846638 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "itens",
        columns: [
          {
            name: "id",
            type: "number",
            isPrimary: true,
            generationStrategy: "increment",
          },

          {
            name: "id_pedido",
            type: "number",
          },

          {
            name: "preco",
            type: "number",
          },

          {
            name: "quantidade",
            type: "number",
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