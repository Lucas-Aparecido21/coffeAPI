import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class pedidos1675361126961 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "pedidos",
        columns: [
          {
            name: "id",
            type: "number",
            isPrimary: true,
            generationStrategy: "increment",
          },

          {
            name: "cpf",
            type: "string",
          },

          {
            name: "valor",
            type: "number",
          },
          {
            name: "entrega",
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
            name: "cpf",
            referencedTableName: "clientes",
            referencedColumnNames: ["cpf"],
            columnNames: ["cpf"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("pedidos");
  }
}
